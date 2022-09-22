
import MainTab from "./filter";
import React, { useEffect } from "react";


function TollList() {


    const [datas , setData] = React.useState([])
    
    useEffect(()=>{
        let filteredData =JSON.parse(localStorage.getItem ('filteredItem') || " [ ] ")
        if(filteredData === null){
            localStorage.setItem ('filteredItem', JSON.stringify(vechileData))
        }
        if(filteredData.length > datas.length){
            setData(filteredData)
        }
    },[])
    

    

    
    
    let vechileData = JSON.parse(localStorage.getItem ( 'tollEntries' ) || " [ ] ")
    
    //localStorage.setItem('searchtoll' , " [ ] ")
    let getTollData = JSON.parse(localStorage.getItem('filteredItem'))
    
    //console.log("Data ",getTollData.length)

    let getsearchData = JSON.parse(localStorage.getItem('searchtoll'))
    console.log("search  ",getsearchData)


    ///////////////////Testing
    
    
    

    let tollfiltered = JSON.parse(localStorage.getItem ('newfiltered') || " [ ] ")

    const remove = (item)=>{
        let result = []
        for(let items of vechileData){
            if(items.tollDetail !== item){
                result.push(items)
            }
        }
        //console.log(result)
        localStorage.setItem('tollEntries', JSON.stringify(result))
        localStorage.setItem('newfiltered', JSON.stringify(JSON.parse(localStorage.getItem('tollEntries'))))
        window.location.reload(false)

    }

    const nofound = ()=>{
        if(tollfiltered.length === 0){
            return(
                <>
                    <h1 style={{
                        position : "absolute",
                        
                        display : "flex",
                        marginTop : "20px",
                        marginLeft : "30%",
                        
                    }}
                    >No Toll Found</h1>
                </>
            )
        }
    }
 
    const filter =()=>{

        
        if(tollfiltered !== null){
            return(
                <>
                    {tollfiltered.map((item , index)=>{
                        return(
                        <tbody key={index}>
                            <tr key={index}>
                                <td >{item.tollDetail}</td>
                                <td >{item.vehicle1.input1} / {item.vehicle1.input2}</td>
                                <td >{item.vehicle2.input1} / {item.vehicle2.input2}</td>
                                <td >{item.vehicle3.input1} / {item.vehicle3.input2}</td>
                                <td >{item.vehicle4.input1} / {item.vehicle4.input2}</td>
                                <td style={{
                                    backgroundColor : "#0677EF",
                                    textAlign : "center",
                                    color : "whitesmoke",
                                    cursor : "pointer",
                                }} onClick={()=>{
                                    remove(item.tollDetail)
                                }}>Delete</td>
                            </tr>
                        </tbody>
                            )
                        })}
                </>
            )

        }else if(getTollData === null  || getsearchData.length === 0){
            return(
                <>
                    {vechileData.map((item , index)=>{
                        return(
                        <tbody key={index}>
                            <tr key={index}>
                                <td >{item.tollDetail}</td>
                                <td >{item.vehicle1.input1} / {item.vehicle1.input2}</td>
                                <td >{item.vehicle2.input1} / {item.vehicle2.input2}</td>
                                <td >{item.vehicle3.input1} / {item.vehicle3.input2}</td>
                                <td >{item.vehicle4.input1} / {item.vehicle4.input2}</td>
                                <td style={{
                                    backgroundColor : "#0677EF",
                                    textAlign : "center",
                                    color : "whitesmoke",
                                    cursor : "pointer",
                                }} onClick={()=>{
                                    remove(item.tollDetail)
                                }}>Delete</td>
                            </tr>
                        </tbody>
                            )
                        })}
                </>
            )
        }else if (getTollData !== null){
            console.log('running')
            return(
                <>
                    {getTollData.map((item , index)=>{
                        return(
                        <tbody key={index}>
                            <tr key={index}>
                                <td >{item.tollDetail}</td>
                                <td >{item.vehicle1.input1} / {item.vehicle1.input2}</td>
                                <td >{item.vehicle2.input1} / {item.vehicle2.input2}</td>
                                <td >{item.vehicle3.input1} / {item.vehicle3.input2}</td>
                                <td >{item.vehicle4.input1} / {item.vehicle4.input2}</td>
                                <td
                                    style={{
                                        backgroundColor : "#0677EF",
                                        textAlign : "center",
                                        color : "whitesmoke",
                                        cursor : "pointer",
                                    }} 
                                    onClick={()=>{
                                        remove(item.tollDetail)
                                    }}>Delete
                                </td>
                            </tr>
                        </tbody>
                            )
                        })}
                </>
            )
        }
        
        

        
    }

    return ( <>
    <MainTab/>
    <table className="customers">
        <thead>
            <tr>
                <th>Toll Name</th>
                <th>Car/Jeep/Van</th>
                <th>LCV</th>
                <th>TRUCK/Bus</th>
                <th>HEAVY VEHICLE</th>
                <th>Action</th>
            </tr>
        </thead>

            {filter()}
            
            
            
        </table>

        {nofound()}


    </> );
}

export default TollList;