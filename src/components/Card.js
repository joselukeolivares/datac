import React from 'react'
import '../css/components/card.scss'
import {Dashboard20,ChartTreemap20} from '@carbon/icons-react'
import {Link} from 'react-router-dom'

const clasesIconsCard={
    dashIcon_container:true,
    dashboardIcon:true,
    chartD3:false

}
class Card extends React.Component{
    render(){

    return   (
        <div className="Card-container">
            <div className="topSection_Card-container">
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

export default Card