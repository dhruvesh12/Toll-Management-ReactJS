
//import "./../style/filter.css"
import React, { useEffect, useMemo } from "react";

import {useNavigate } from "react-router-dom";
import TableTab from "./tableView";
import TollList from "./tollList";


function MainTab() {
    const [isActive, setIsActive] = React.useState(false);
    const [searchval , setSearchVal] = React.useState('');
    const [tollsearch , setTollSearch] = React.useState('')
    
    let viewTolls = JSON.parse(localStorage.getItem('Booleon'))
    const [booleon , setbooleon] = React.useState(viewTolls)

    //status for Btn

    const [viewTollstatus , setviewTollstatus] = React.useState(true)


    useMemo(()=>{
        var toll = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [] " )
        if(toll[0]===undefined){
            setviewTollstatus(true)
        }else{
            setviewTollstatus(false)
        }
        
    },[viewTollstatus])

    const navigate = useNavigate()
    
    //console.log(isActive)
    useEffect(()=>{
        
    })
    var tollData = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )
    
    let tablebooleon = JSON.parse(localStorage.getItem ('Booleon') || " [ ] ")
    
    //var tablebooleon = JSON.parse(localStorage.getItem( 'booleonForTable' ) || " [ ] " )
    
    if(JSON.parse(localStorage.getItem ('Booleon') || " [ ] ") === true){
        localStorage.setItem('newfiltered', JSON.stringify(JSON.parse(localStorage.getItem ( 'tollEntries' ))))
    }
    
    let vehicleDetail = []
    const filtertolldropdown = (e)=>{
        var entrties = JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ) || " [ ] " )
        
        if(e === 'All'){
            for(let i of entrties){
                vehicleDetail.push(i)

            }
            localStorage.setItem ( 'filteredItem' , JSON.stringify ( vehicleDetail ) )
            //window.location.reload(false)
        }else{
            localStorage.setItem ( 'filteredItem' , JSON.stringify ( entrties ) )
        }
        
        for(let i of entrties){
            
            if(i.tollName === e){
                vehicleDetail.push(i)
            }

        }
        localStorage.setItem ( 'filteredItem' , JSON.stringify ( vehicleDetail ) )

        
        // window.location.reload(false);
    }


   
    const handleinput1 = (e)=>{
        setSearchVal(e)
    }

    const handleinput2 = (e)=>{
        setTollSearch(e)

    }
/////////FOR VEHICLE SEARCH BAR
    useMemo(()=>{
        
        
        if (searchval.length > 0){
            let entrties = JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ) || " [ ] " )
            
            const filteredData = entrties.filter((item) => String(item.vehicleNo).toLowerCase().includes(String(searchval).toLowerCase()))
            //console.log(filteredData)
            localStorage.setItem('filteredItem',JSON.stringify(filteredData))

        }else if(searchval.length === 0){
            var entrties = JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ) || " [ ] " )
            localStorage.setItem('filteredItem',JSON.stringify(entrties))
        }
        
    },[searchval])
    

    useMemo(()=>{
        if (tollsearch.length > 0){
            let entrties = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )

            const filteredData = entrties.filter((item) => String(item.tollDetail).toLowerCase().includes(String(tollsearch).toLowerCase()))
            //console.log(filteredData)
            localStorage.setItem('newfiltered',JSON.stringify(filteredData))
            localStorage.setItem('searchtoll',JSON.stringify(tollsearch))
            setTimeout(()=>{
                window.location.reload(false);
            },[2000])

        }else if(tollsearch.length === 0){
            var entrties = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )
            localStorage.setItem('filteredItem',JSON.stringify(entrties))
        }
        },[tollsearch])

    
    
    //For View Toll

    

    
    
    useMemo(()=>{
        localStorage.setItem ( 'Booleon' , true )
        localStorage.setItem ( 'Booleon' , JSON.stringify(booleon) )
        
        if(JSON.parse(localStorage.getItem('Booleon')) === false){
            navigate('/tolllist')
        }else{
            navigate('/')
        }
    },[booleon])

    

    

    return ( <>

    
        <h4 style={{
            display : "flex",
            marginLeft : "50px"
        }}>Toll Management Application
        </h4>

        <hr/>

        <div className="main">
            <div className="a">
            
            
            
 {/* For Home Page Filter          */}
            {viewTolls ? <>
                <h3> Toll entries/Vehicle entries</h3>
                <img onClick={()=>{
                    if(isActive === false){
                        setIsActive(true)
                    }
                    else{
                        setIsActive(false)
                    }
                    
                }} style={{
                marginTop: "20px",
                marginLeft : "10px",
            }} src="./filter.svg" alt="">

            </img>

            <div className="dropdowncontainer" style={{
                display : isActive ? 'inline-block' : 'none',
                backgroundColor : "white",
            }}>
                <li style={{
                    cursor: "pointer",
                            }}
                 key={'name'}
                onClick={(e)=>{
                    setIsActive(false)
                    filtertolldropdown(e.target.innerHTML)
                }}>All</li>

                {tollData?.map((item,index)=>{
                    return(
                        <div  key={index}>
                            
                            <li  style={{
                                cursor: "pointer",
                            }}
                             onClick={(e)=>{
                                setIsActive(false)
                                localStorage.setItem('Name', item.tollDetail);
                                filtertolldropdown(item.tollDetail)
                                
                            }}>
                                {item.tollDetail}
                            </li>
                        </div>
                    )
                })}
            </div>  

                <input style={{
                height : "35px",
                width : "400px",
                borderRadius : "10px",
                marginTop : "10px",
                marginLeft : "10px",
                fontFamily : "Arial , FontAwesome",
                fontSize : "large",
            }} 

            onChange={(e)=>{
                handleinput1(e.target.value)
                
            }}

            placeholder="&#xF002; Search Vehicle" />

            

            </> :
    /* For Toll Gates Filter          */
             <>
            <h3> Toll Gates List</h3>
            <input style={{
                height : "35px",
                width : "400px",
                borderRadius : "10px",
                marginTop : "10px",
                marginLeft : "10px",
                fontFamily : "Arial , FontAwesome",
                fontSize : "large",
                
                
            }} 
            value = {tollsearch}
            onChange={(e)=>{
                handleinput2(e.target.value)
            }}

            placeholder="&#xF002; Search Toll"
            ref={(element) => element?.focus?.()}
             />

            
            </>}
            

     {/* For Right  Filter          */}       
            
        </div>
            
            <div className="c">

            <button onClick={()=>{
                    localStorage.setItem('filteredItem',JSON.stringify(null))
                    setbooleon(true)
                    navigate('/addentry')
                }}

                style={{
                    cursor : "pointer",
                }}
                disabled={viewTollstatus}
                >
                Add Vehicle Entry
            </button>
                <button onClick={()=>{
                    localStorage.setItem('filteredItem',JSON.stringify(JSON.parse(localStorage.getItem(' vehicleEntries '))))
                    setbooleon(true)
                    navigate('/addtoll')
                }}>
                <a style={{
                    color : "white",
                    textDecoration: "none", 
                }} href="/addtoll">Add Toll</a>
            </button>


            {booleon? <button 
            onClick={()=>{
                if(booleon === false){
                    setbooleon(true)
                }else if(booleon === true){
                    
                    setbooleon(false)
                }

                //localStorage.setItem('booleonForTable', false)

                localStorage.setItem('filteredItem','')
                var entrties = JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] " )
        
                
                
                localStorage.setItem ( 'filteredItem' , JSON.stringify ( entrties ) )
                
            }}

            style={{
                    cursor : "pointer",
                }}
            disabled={viewTollstatus}

            >View Tolls</button> : 
            <button 
            onClick={()=>{
                if(booleon === false){
                    
                    setbooleon(true)
                }else if(booleon === true){
                    
                    setbooleon(false)
                }
                //localStorage.setItem('booleonForTable', )
                localStorage.setItem('filteredItem','')
                var entrties = JSON.parse ( localStorage.getItem ( ' vehicleEntries ' ) || " [ ] " )
        
                
                for(let i of JSON.parse ( localStorage.getItem ( 'tollEntries' ) || " [ ] ")){
                    vehicleDetail.push(i)

                }
                localStorage.setItem ( 'filteredItem' , JSON.stringify ( entrties ) )
                
            }}
            >Back to vehicle logs</button>}
            
            
            </div>
        </div>
        <div>

        </div>
        {/* {JSON.parse(localStorage.getItem('Booleon')) ? <TableTab/> : <TollList/>} */}
        
        <TableTab/>

        
    </> );
}

export default MainTab;