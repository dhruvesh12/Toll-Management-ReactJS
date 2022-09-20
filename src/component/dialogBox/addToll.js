import "./../../style/filter.css"
import React from "react";
import { useNavigate } from "react-router-dom";
import Main from "../main";

function AddToll() {
   
    const [addTollisActive, setTollisActive] = React.useState(false);
    const navigate = useNavigate()
    
    
    
    const vehicleList = ["Car/Jeep/Van","LCV","Truck/Bus","Heavy Vehicle"]

    var x = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )

    console.log(x)

    
    
    
    

    
    let tollDetail = {}

    let vehicle1Detail = {}
    let vehicle1Detail2 = {}
    let vehicle1Detail3 = {}
    let vehicle1Detail4 = {}

    
    
    const submit = ()=>{
        tollDetail['vehicle1']= vehicle1Detail
        tollDetail['vehicle2']= vehicle1Detail2
        tollDetail['vehicle3']= vehicle1Detail3
        tollDetail['vehicle4']= vehicle1Detail4
        

        //for Vehicle Type : 

        vehicle1Detail['vechicletype'] = vehicleList[0]
        vehicle1Detail2['vechicletype'] = vehicleList[1]
        vehicle1Detail3['vechicletype'] = vehicleList[2]
        vehicle1Detail4['vechicletype'] = vehicleList[3]

        if(addTollisActive === false){
            setTollisActive(true)
        }
        else{
            setTollisActive(false)
        }

        if(vehicle1Detail['input1'] === undefined || vehicle1Detail2['input1'] === undefined || vehicle1Detail3['input1'] === undefined || vehicle1Detail4['input1'] === undefined){
            console.log('null')
            return(
                alert("Single Input is Empty")
            )
        }

        if(vehicle1Detail['input2'] === undefined || vehicle1Detail2['input2'] === undefined || vehicle1Detail3['input2'] === undefined || vehicle1Detail4['input2'] === undefined){
            console.log('null')
            return(
                alert("Return Input is Empty")
            )
        }
        
        var Tolls = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )
        console.log(Tolls)
        Tolls.push ( tollDetail )
        localStorage.setItem ( 'tollEntries' , JSON.stringify ( Tolls ) )
        localStorage.setItem('filteredItem', JSON.stringify(JSON.parse(localStorage.getItem(' vehicleEntries '))) )

        navigate('/')
        console.log('Saved')



    }
    


    return ( <>
         <Main/>
         {/* For Add Toll Dialog Box */}
         <div className="container" style={{
            display : addTollisActive ? 'none' : 'inline-block',
         }}>
         <div>
                <a href="/" title="Close" className="close" onClick={()=>{
                    navigate('/')

                }}>X</a> 
                <h2 style={{
                    textAlign : "Center"
                }}>Add New Toll</h2>
                <h3>Toll Name</h3>
                <input style={{
                    width : "500px",
                    height:"30px",
                    border : "2px solid grey",
                    borderRadius:"5px",
                    fontSize : "large",
                }}
                
                onChange={(e)=>{
                    tollDetail['tollDetail'] = e.target.value
                }}

                 type={'text'} />

                <h4> Vechicle fare details </h4>

                <div className="vehicleDropdown">
                    <select
                    value={vehicleList[0]}
                    onClick={(e)=>{
                        //console.log(e.target.value)
                        
                        
                    }} >
                        {vehicleList.map((item,index)=>{
                            return(

                                <option  key={index}>{item}</option>
                            )
                        })}
                        

                    </select>

                    <input onChange={(e)=>{
                        vehicle1Detail['input1']=e.target.value
                    }} placeholder="Single Journey" type={"text"} />

                    <input onChange={(e)=>{
                        vehicle1Detail['input2']=e.target.value
                    }} placeholder="Return Journey" type={"text"} />
                </div>
{/* Second vehicle start here----------------------------------------------------------------------------------------*/}
                <div className="vehicleDropdown">
                    <select
                    value={vehicleList[1]}>
                        {vehicleList.map((item,index)=>{
                            return(

                                <option  key={index}>{item}</option>
                            )
                        })}
                        

                    </select>

                    <input onChange={(e)=>{
                        vehicle1Detail2['input1'] = e.target.value
                    }} placeholder="Single Journey" type={"text"} />

                    <input onChange={(e)=>{
                        vehicle1Detail2['input2'] = e.target.value
                    }} placeholder="Return Journey" type={"text"} />
                </div>
{/* Third vehicle start here----------------------------------------------------------------------------------------*/}
                <div className="vehicleDropdown">
                    <select
                    value={vehicleList[2]}
                    >
                        {vehicleList.map((item,index)=>{
                            return(

                                <option  key={index}>{item}</option>
                            )
                        })}
                        

                    </select>

                    <input onChange={(e)=>{
                        vehicle1Detail3['input1'] = e.target.value
                    }} placeholder="Single Journey" type={"text"} />

                    <input onChange={(e)=>{
                        vehicle1Detail3['input2'] = e.target.value
                    }} placeholder="Return Journey" type={"text"} />
                </div>
{/* Fourth vehicle start here----------------------------------------------------------------------------------------*/}
                <div className="vehicleDropdown">
                    <select
                    value={vehicleList[3]}
                     >
                        {vehicleList.map((item,index)=>{
                            return(
                                
                                <option  key={index}>{item}</option>
                            )
                        })}
                        

                    </select>

                    <input onChange={(e)=>{
                        vehicle1Detail4['input1'] = e.target.value
                    }} placeholder="Single Journey" type={"text"} />

                    <input onChange={(e)=>{
                        vehicle1Detail4['input2'] = e.target.value
                    }} placeholder="Return Journey" type={"text"} />
                </div>

                <button style={{
                    
                    marginLeft : "100px",
                    color : "white",
                    width : "500px",
                    height : "40px",
                    backgroundColor : "#3375E6",
                    border : "none",
                    borderRadius : "5px",
                }}
                onClick={submit} >Add Detail</button>
            </div>
            </div>
        {/* For Add Toll Dialog Box End Here !!!!!!! */}

    </> );
}

export default AddToll;