import React from "react";
import CardCategory from './CardCategory'
import {Dashboard20} from '@carbon/icons-react'



function Category(){

    return (
        <React.Fragment>
            <div className="headerCategory">
                <div className="iconCategory">
                    <Dashboard20/>
                </div>
                <div className="nameCategory">Dashboards</div>
            </div>
            <div className="cardsCategory">
                <CardCategory></CardCategory>
            </div>

        </React.Fragment>
    )
}

export {Category}