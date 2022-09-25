import "./../../style/filter.css"
import React, { useEffect, useMemo , useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../main";

function AddToll() {
   
    const [addTollisActive, setTollisActive] = React.useState(false);
    const navigate = useNavigate()
    const [vehicle , setVehicle] = React.useState([])
    const [btnactive , setbtnactive] = React.useState(true)

    //for Toll Inputs Validation

    const [tollName , settollDetail] = useState('')
    const [vehicle1input , setVechicleinput1] = useState('')
    const [vechicletypeinput2 , setVechicleinput2] = useState('')

    const [vehicle2input , setVechicle2input1] = useState('')
    const [vechicle2input2 , setVechicle2input2] = useState('')

    const [vehicle3input , setVechicle3input1] = useState('')
    const [vechicle3input2 , setVechicle3input2] = useState('')

    const [vehicle4input , setVechicle4input1] = useState('')
    const [vechicle4input2 , setVechicle4input2] = useState('')
    
    
    
    const vehicleList = ["Car/Jeep/Van","LCV","Truck/Bus","Heavy Vehicle"]

    //var x = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )

    //console.log(vehicle)

    
    
    useMemo(()=>{
        
        if(vechicletypeinput2 !== ''){
            if(Number(vechicletypeinput2) >= Number(vehicle1input)){
                setVechicleinput2('')
                alert("please Enter Correct input")
            }

            
        }

        if(vechicle2input2 !== ''){
            if(Number(vechicle2input2) >= Number(vehicle2input)){
                setVechicle2input2('')
                alert("please Enter Correct input")
            }

        }

        if(vechicle3input2 !== ''){

            if(Number(vechicle3input2) >= Number(vehicle3input)){
                setVechicle3input2('')
                alert("please Enter Correct input")
            }

        }

        if(vechicle4input2 !== ''){
            if(Number(vechicle4input2) >= Number(vehicle4input)){
                setVechicle4input2('')
                alert("please Enter Correct input")
            }
        }

        if(vehicle1input !== '' && vechicletypeinput2 !== '' && vehicle2input !== '' && vechicle2input2 !== '' &&
        vehicle3input !== '' && vechicle3input2 !== '' && vehicle4input !== '' && vechicle4input2 !== '' && tollName !== ''){

            setbtnactive(false)

        }
        
    },[vechicletypeinput2,vechicle2input2,vechicle3input2,vechicle4input2 ,tollName])
    

    
    let tollDetail = {}

    let vehicle1Detail = {}
    let vehicle1Detail2 = {}
    let vehicle1Detail3 = {}
    let vehicle1Detail4 = {}

  
    
    
    const submit = ()=>{

        
        tollDetail['tollDetail'] = tollName
        tollDetail['vehicle1']= {input1 : vehicle1input , input2 : vechicletypeinput2 , vechicletype : vehicleList[0]}
        tollDetail['vehicle2']= {input1 : vehicle2input , input2 : vechicle2input2 , vechicletype : vehicleList[1]}
        tollDetail['vehicle3']= {input1 : vehicle3input , input2 : vechicle3input2 , vechicletype : vehicleList[2]}
        tollDetail['vehicle4']= {input1 : vehicle4input , input2 : vechicle4input2 , vechicletype : vehicleList[3]}
        

        //for Vehicle Type : 

        vehicle1Detail['vechicletype'] = vehicleList[0]
        vehicle1Detail2['vechicletype'] = vehicleList[1]
        vehicle1Detail3['vechicletype'] = vehicleList[2]
        vehicle1Detail4['vechicletype'] = vehicleList[3]
        //for Vehicle Type : 

        
        

        //console.log(tollDetail)

        if(addTollisActive === false){
            setTollisActive(true)
        }
        else{
            setTollisActive(false)
        }
        console.log(tollDetail.tollDetail)
        if(tollDetail.tollDetail=== ''){
            alert('Please Enter Toll Name')
        }else if(tollDetail['vehicle1'].input1 === '' || tollDetail['vehicle2'].input1 === '' || tollDetail['vehicle3'].input1 === '' || tollDetail['vehicle4'].input1 === ''){
            console.log('null')
            return(
                alert("Single Input is Empty")
            )
        }else if(tollDetail['vehicle1'].input2 === '' || tollDetail['vehicle2'].input2 === '' || tollDetail['vehicle3'].input2 === '' || tollDetail['vehicle4'].input2 === ''){
            console.log('null')
            return(
                alert("Return Input is Empty")
            )
        }else{
            var Tolls = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )
            console.log(Tolls)
            Tolls.push ( tollDetail )
            localStorage.setItem ( 'tollEntries' , JSON.stringify ( Tolls ) )
            localStorage.setItem('filteredItem', JSON.stringify(JSON.parse(localStorage.getItem(' vehicleEntries '))) )
            alert("Success Added Toll")
            setVehicle('')
            navigate('/')
            console.log('Saved')
        }

        

        
        
            



    }
    


    return ( <>
         <Main/>
         {/* For Add Toll Dialog Box */}
         <div className="container" style={{
            // display : addTollisActive ? 'none' : 'inline-block',
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
                    settollDetail(e.target.value)
                    
                }}

                 type={'text'} />

                <h4> Vehicle fare details </h4>

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

                    <input value={vehicle1input} onChange={(e)=>{
                        setVechicleinput1(e.target.value)
                        //vehicle1Detail['input1'] = e.target.value
                        
                        
                        
                    }} placeholder="Single Journey" type={'number'} />

                    <input value={vechicletypeinput2} onChange={(e)=>{
                        setVechicleinput2(e.target.value)
                        //setVehicle(e.target.value)
                        //vehicle1Detail['input2']= e.target.value
                    }} placeholder="Return Journey" type={'number'} />
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

                    <input value={vehicle2input} type={'number'} onChange={(e)=>{
                        setVechicle2input1(e.target.value)
                    }} placeholder="Single Journey"  />

                    <input value={vechicle2input2} onChange={(e)=>{
                        setVechicle2input2(e.target.value)
                    }} placeholder="Return Journey" type={'number'} />
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

                    <input  value={vehicle3input} onChange={(e)=>{
                        setVechicle3input1(e.target.value)
                    }} placeholder="Single Journey" type={'number'} />

                    <input value={vechicle3input2} onChange={(e)=>{
                        setVechicle3input2(e.target.value)
                    }} placeholder="Return Journey" type={'number'} />
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

                    <input value={vehicle4input} onChange={(e)=>{
                        setVechicle4input1(e.target.value)
                    }} placeholder="Single Journey" type={'number'} />

                    <input value={vechicle4input2} onChange={(e)=>{
                        setVechicle4input2(e.target.value)
                        //vehicle1Detail4['input2'] = e.target.value
                    }} placeholder="Return Journey" type={'number'} />
                </div>

                <button className="btnstatus" 
                onClick={submit} 
                
                disabled={btnactive}
                
                >Add Detail</button>
            </div>
            </div>
        {/* For Add Toll Dialog Box End Here !!!!!!! */}

    </> );
}

export default AddToll;