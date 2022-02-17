import React from 'react'
import '../css/components/cardCategory.scss'
import {Dashboard20,ChartTreemap20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'
import dashboard from '../pictures/dashboard.jpg'
import { useHistory } from 'react-router-dom'

const clasesIconsCard={
    dashIcon_container:true,
    dashboardIcon:true,
    chartD3:false

}


    function CardCategory(){

        const history=useHistory()
    function handleClick(){
        history.push('/dashboardCarbon')
    }


    return   (
        <div className="Card-container">
            <div className='top_CardCategory-container dashboardImg'>

            </div>
            <div className="bottom_CardCategory-container">
                <div id="typeTitle-topSection_Card">
                    <p id="typeTitle_typeTitle" className='typesText_card-Container'>Tipo de producto ejemplo</p>
                    <a id="nameTitle_typeTitle" className='nameText_card-Container' href='/dashboardCarbon'>Titulo ejemplo</a>
                    
                </div>                               
                <div className="iconSection-Category">
                    <div className={'dashIcon_container dashboardIcon'}><Dashboard20 /></div>
                    <div className={'dashIcon_container chartD3Icon'}><ChartTreemap20 /></div>                    
                    
                </div>
                
            </div>
            
        </div>
    ) 

    }


export default CardCategory