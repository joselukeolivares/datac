import React from "react";
import Card from "./Card"
import '../css/components/categoriesContainer.scss'
import { Category } from "./Category";

class HistoryCards extends React.Component{

    render(){

    return    (
                <React.Fragment>
                <div id="categoriesContainer">                    
                    <h3>¿Qué buscar?</h3>
                    <div className="categoryCards">
                        <Category></Category>
                    </div>
                </div>
                </React.Fragment>
            )

    }
}

export default HistoryCards