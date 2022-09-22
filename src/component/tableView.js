import "./../style/filter.css"
import React, { useEffect } from "react";


function TableTab() {
    
    let vechileData = JSON.parse(localStorage.getItem ( ' vehicleEntries ' ) || " [ ] ")
    
    const [datas , setData] = React.useState([])
    

    let filteredData =JSON.parse(localStorage.getItem ('filteredItem') || " [ ] ")

    let tablebooleon = JSON.parse(localStorage.getItem ('Booleon') || " [ ] ")

    
    if(tablebooleon === true){
        localStorage.setItem ('filteredItem' , JSON.stringify(vechileData))
        console.log("This is running")
    }
    
    

    

    

    if(filteredData === null){
        localStorage.setItem ('filteredItem', JSON.stringify(vechileData))
    }
    if(filteredData.length > datas.length){
        setData(filteredData)
    }
    
    const data = ()=>{

        

        if(filteredData === undefined || filteredData === null){
            
            return(
                <>
                    {vechileData.map((item,index)=>{
                    return(
                        <tbody key={index}>
                        <tr >
                            <td >{item.VehicleType}</td>
                            <td >{item.vehicleNo}</td>
                            <td >{item.time}</td>
                            <td >{item.tollName}</td>
                            <td >{item.tariff}</td>
                        </tr>
                        </tbody>
                    )
                })}
                </>
            )
        }else {
            
            return(
                <>
                    {filteredData.map((item,index)=>{
                    return(
                        <tbody key={index}>
                        <tr >
                            <td >{item.VehicleType}</td>
                            <td >{item.vehicleNo}</td>
                            <td >{item.time}</td>
                            <td >{item.tollName}</td>
                            <td >{item.tariff}</td>
                        </tr>
                        </tbody>
                    )
                })}
                </>
            )
        }

    }

    

    return ( 
        <>
        <table style={{
            display : tablebooleon ? '' : 'none',
        }} className="customers">
            <thead>
            <tr>
                <th>Vehicle Type</th>
                <th>Vehicle Number</th>
                <th>Date/Time</th>
                <th>Toll Name</th>
                <th>Tarif</th>
            </tr>
            </thead>
            {data()}
            
            
        </table>
        </>
     );
}

export default TableTab;