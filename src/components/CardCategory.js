import React from 'react'
import '../css/components/cardCategory.css'
import {Dashboard20,ChartTreemap20,Linux20,ChartLine20,TableSplit20,Carbon20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'
import dashboard from '../pictures/dashboard.jpg'
import { useHistory } from 'react-router-dom'

const clasesIconsCard={
    dashIcon_container:true,
    dashboardIcon:true,
    chartD3:false

}


    function CardCategory({metadata}){

        const name=metadata.name
        const type=metadata.type
        const typeCode=metadata.typeCode
        const typeIcons=metadata.typeIcons

        const history=useHistory()
    function handleClick(){
        history.push('/dashboardCarbon')
    }

    function iconComponent(name){
        switch(name){
            case 'dashboard':
                    return <Dashboard20 />
            case 'carbon':
                    return <Carbon20 />
            case 'chart':
                return <ChartTreemap20 />
            case 'coppelBoard':
                return <TableSplit20 />                    
            case 'indicator':
                return <ChartLine20 />
            case 'tableauIcon':
                return <br/>   
            default:
                return <Linux20 />       
        }
    }


    return   (
        <div className="Card-container">
            <div className={`top_CardCategory-container ${typeCode}Type`}>

            </div>
            <div className="bottom_CardCategory-container">
                <div id="typeTitle-topSection_Card">
                    <p id="typeTitle_typeTitle" className='typesText_card-Container'>{type}</p>
                    <a id="nameTitle_typeTitle" className='nameText_card-Container' href='/dashboardCarbon'>{name}</a>
                    
                </div>                               
                <div className="iconSection-Category">                    
                    {typeIcons.map((type,i)=>{
                            return(
                                <div key={`${type}.${i}`} className={`dashIcon_container ${type}`}>
                                    {
                                        iconComponent(type) 
                                    }
                                </div>
                            )
                        })}                    
                    
                </div>
                
            </div>
            
        </div>
    ) 

    }


export default CardCategory