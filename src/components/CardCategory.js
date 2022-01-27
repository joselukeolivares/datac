import React from 'react'
import '../css/components/cardCategory.scss'
import {Dashboard20,ChartTreemap20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'
import dashboard from '../pictures/dashboard.jpg'

const clasesIconsCard={
    dashIcon_container:true,
    dashboardIcon:true,
    chartD3:false

}
class CardCategory extends React.Component{
    render(){

    return   (
        <div className="Card-container">
            <div className="bottomSection_CardCategory-container">
                <div id="typeTitle-topSection_Card">
                    <p id="typeTitle_typeTitle" className='typesText_card-Container'>Tipo de producto ejemplo</p>
                    <p id="nameTitle_typeTitle" className='nameText_card-Container'>Titulo ejemplo</p>
                </div>
                <div className="iconsSection_container">                    
                    <div className="iconSection">
                        <div className={'dashIcon_container dashboardIcon'}><Dashboard20 /></div>
                        <div className={'dashIcon_container chartD3Icon'}><ChartTreemap20 /></div>
                        
                        
                    </div>
                </div>
            </div>
            <div className='linkCotainer'>
                <div className="link_container">
                    <Link className='linkCard'>Ver de nuevo</Link>
                </div>
            </div>
        </div>
    ) 

    }
}

export default CardCategory