import React from "react";
import CardCategory from './CardCategory'
import {Dashboard20} from '@carbon/icons-react'
import  '../css/components/card.scss'
import '../css/components/category.scss'



function Category(){

    return (
        <React.Fragment>
            <div className="categoryColumn">
                <div className="headerCategory">
                    <div className="dashIcon_container dashboardIcon">
                        <Dashboard20/>
                    </div>
                    <div className="nameCategory">Dashboards</div>
                </div>
                <div className="cardsCategory">
                    <CardCategory></CardCategory>
                </div>
            </div>

        </React.Fragment>
    )
}

export {Category}