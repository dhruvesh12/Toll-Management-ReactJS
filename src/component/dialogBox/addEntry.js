
import "./../../style/filter.css"
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../main";
import TableTab from "../tableView";
import TollList from "../tollList";

function AddEntry() {

    let navigate = useNavigate()

    
    const [toll ,setToll] = React.useState('')
    const [vehicletype , setvehicletype] = React.useState('')
    const [vehicleNo , setVehicleNo] = React.useState('')
    const [tarif , settarif] = React.useState('')
   
    const [vehiclevalidate , setvehiclevalidate] = React.useState(true)

    const [viewEntrystatus , setviewEntrystatus] = React.useState(true)
    
    let getTollName = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )

    
    ////////////////////////Add Buttton Validation

    useMemo(()=>{
        console.log('Toll:-',toll)
        console.log('vehicletype:-',vehicletype)
        console.log('vehicleNo:-',vehicleNo)
        console.log('tarif:-',tarif)
        if(toll !== '' && vehicletype !=='' && vehicleNo !=='' && tarif !== ''){
            setviewEntrystatus(false)
        }
    },[toll , vehicletype , vehicleNo ,tarif])
    
    

    const vehicleList = ["Car/Jeep/Van","LCV","Truck/Bus","Heavy Vehicle"]
    var status = JSON.parse ( localStorage.getItem ( 'Booleon' ) || " [ ] " )

    let vehicletoll={}

    //console.log(toll==='')

    useMemo(()=>{
        let currentTime = new Date()
        let test = []

        
        //To validate Vehicle No.
        if(vehicleNo !== ''){
            var RegEx = /^[a-z0-9]+$/i;
            var Valid = RegEx.test(vehicleNo);
            setvehiclevalidate(Valid)
        }
        

        

        if(Valid === false){
            var result = String(vehicleNo).slice(0,-1);
            setVehicleNo(result)
            alert("Please Insert Alphanumeric")
        }
        
        if(JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ))=== null){
            for(let item of getTollName){
                if(toll === item.tollDetail){
                    console.log(toll ,item.tollDetail )
                    if(item.vehicle1.vechicletype === vehicletype ){
                        settarif(item.vehicle1.input1)
                        
                        
                    }
                    if(item.vehicle2.vechicletype === vehicletype){
                        settarif(item.vehicle2.input1)
                        
                    }
                    if(item.vehicle3.vechicletype === vehicletype){
                        settarif(item.vehicle3.input1)
                        
                    }
                    if(item.vehicle4.vechicletype === vehicletype){
                        settarif(item.vehicle4.input1)
                        
                    }
                    break
                    
                }
                result=''
            }
        }
        
        
        for(let i of JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ) || " [ ] ")){

            if(i.vehicleNo === vehicleNo){
            
                test=i.time

                var diff = currentTime.valueOf() - (new Date(test)).valueOf();
        
                var result = Math.floor(diff/1000/60/60)
                for(let item of getTollName){
                    if(toll === item.tollDetail){
                        console.log(toll)
                        if(item.vehicle1.vechicletype === vehicletype ){
                            
                            if(result < 1){
                                
                                settarif(item.vehicle1.input2)
                            }
                            
                            
                        }
                        if(item.vehicle2.vechicletype === vehicletype){
                            
                            if(result < 1){
                                console.log(result)
                                settarif(item.vehicle2.input2)
                            }
                            
                        }
                        if(item.vehicle3.vechicletype === vehicletype){
                            
                            if(result < 1){
                                console.log('running')
                                settarif(item.vehicle3.input2)
                            }
                            
                        }
                        if(item.vehicle4.vechicletype === vehicletype){
                            
                            if(result < 1){
                                console.log('running')
                                settarif(item.vehicle4.input2)
                            }
                            
                        }
                        break
                        
                    }
                    result=''
                }
        
                if(vehicleNo===''){
                    settarif('')
                }
            }else{
                for(let item of getTollName){
                    if(toll === item.tollDetail){
                        console.log(toll)
                        if(item.vehicle1.vechicletype === vehicletype){
                            settarif(item.vehicle1.input1)
                            
                            
                        }
                        if(item.vehicle2.vechicletype === vehicletype){
                            settarif(item.vehicle2.input1)
                            
                        }
                        if(item.vehicle3.vechicletype === vehicletype){
                            settarif(item.vehicle3.input1)
                            
                        }
                        if(item.vehicle4.vechicletype === vehicletype){
                            settarif(item.vehicle4.input1)
                            
                        }
                        break
                        
                    }
                    result=''
                }
        
                if(vehicleNo===''){
                    settarif('')
                }
            }
   
        
        }

        
       
        
    },[vehicleNo, toll , vehicletype])

    let vehicleDetail = {}
    
    const submit =()=>{

        vehicleDetail['VehicleType'] = vehicletype
        vehicleDetail['vehicleNo'] = vehicleNo
        vehicleDetail['time'] = new Date().toLocaleString()
        vehicleDetail['tollName'] = toll
        vehicleDetail['tariff'] = tarif

        //console.log(vehicletype)

        if(vehicleNo === undefined || vehicletype === '' || toll === '' || tarif === ''){
            alert("Please Enter All Field ")
        }else{
            var entrties = JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ) || " [ ] " )
       
        
            entrties.push ( vehicleDetail )
            localStorage.setItem ( ' vehicleEntries ' , JSON.stringify ( entrties ) )
            //let prev = localStorage.setItem ( ' vehicleEntries ' , JSON.stringify ( entrties ) )
            //setTimeout(window.location.reload(false),2000)
            localStorage.setItem ( 'filteredItem' , JSON.stringify ( entrties ) )
            navigate('/')
            //window.location.reload(false);
        }

       

    }
    

    return ( <>
        {status ? <Main/> : <TollList/>}
        
        <div className="container" style={{
            // display : addTollisActive ? 'none' : 'inline-block',
         }}>
         <div style={{
            // display : addTollisActive ? 'none' : 'inline-block',
            width : "450px",
            height : "600px",
         }}>
                <h4  title="Close" className="close" onClick={()=>{
                    if(status=== true){
                        navigate('/')
                    }else{
                        navigate('/tolllist')
                    }
                    

                }}>X</h4> 

                {/* {()=>{
                    if(status===true){
                        <a href="/" title="Close" className="close" onClick={()=>{

                            navigate('/')

                        }}>X</a> 
                    }else{
                        <a href="/" title="Close" className="close" onClick={()=>{

                        navigate('/')

                        }}>X</a> 
                    }
                }} */}

                <h2 style={{
                    textAlign : "Center"
                }}>Add Vehicle Entry</h2>

                <div style={{
                    display: "block",
                    
                    width: "30%",
                    padding : "30px",
                    paddingTop : "10px",
                    paddingLeft : "120px",
                                        
                    
                    
                    
                    
                }}>
                    {toll === '' ? <h3 style={{
                        display : "flex",
                        position : "absolute",
                        marginLeft : "-130px",
                        marginTop : "90px",
                        color : "red",
                    }} >Not Selected</h3> : ''}

                    <h3>Select toll name</h3>
                    <select 
                    style={{
                        
                        height : "40px",
                        width : "200px",
                        fontSize : "x-large",
                        textAlign : "center",

                    }} 
                    
                    onClick={(e)=>{
                        setToll(e.target.value)
                        vehicletoll['tollName'] = toll
                    }}
                    >
                        {getTollName?.map((item,index)=>{
                            return(
                                <option  key={index}>{item.tollDetail}</option>
                            )
                        })}
                    </select>

                    {vehicletype === '' ? <h3 style={{
                        display : "flex",
                        position : "absolute",
                        marginLeft : "-130px",
                        marginTop : "90px",
                        color : "red",
                    }} >Not Selected</h3> : ''}

                    <h3>Select Vehicle type</h3>
                    <select
                    onClick={(e)=>{
                        setvehicletype(e.target.value)
                    }}

                    style={{
                        
                        height : "40px",
                        width : "200px",
                        fontSize : "x-large",
                        textAlign : "center",

                    }}>
                        {vehicleList?.map((item,index)=>{
                            return(
                                <option  key={index}>{item}</option>
                            )
                        })}
                    </select>

                    <h3>Vehicle Number</h3>
                    <input value={vehicleNo}
                    onChange={(e)=>{
                        setVehicleNo(e.target.value)
                    }}
                     style={{
                        
                        height : "30px",
                        width : "200px",
                        fontSize : "x-large",
                        textAlign : "center",

                    }} placeholder='Enter Vehicle No.' />
                    
                    <h3>Tarif</h3>
                    <input style={{
                        
                        height : "30px",
                        width : "200px",
                        fontSize : "x-large",
                        textAlign : "center",

                    }} placeholder='Tariff amount' value={tarif} disabled />

                    
                </div>
                


                <button style={{
                    display: "inline-block",
                    marginLeft : "10%",
                    color : "white",
                    width : "400px",
                    height : "40px",
                    backgroundColor : "#3375E6",
                    border : "none",
                    borderRadius : "5px",
                    cursor: "pointer",
                }}

                onClick={submit}
                disabled={viewEntrystatus}
                className="Btndesign"
                 ><h4 style={{
                    textAlign : "center",
                    marginTop : "10px",
                 }}>Add Detail</h4></button>
            </div>
            </div>

            

        
        
        </> 
    );
}

export default AddEntry;