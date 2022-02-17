import React from "react";
import Card from "./Card"
import '../css/components/historyCards.scss'



class HistoryCards extends React.Component{

    cardsHistory=[1,2,3,4,5]    

    render(){

    return    (
                <React.Fragment>
                <div id="cardsContainer">
                    <h3>Últimas búsquedas</h3>
                    <div className="CardsHist-Carrusel">
                        {this.cardsHistory.map(()=>{
                            return (<Card></Card>)
                        })}
                    </div>
                </div>
                </React.Fragment>
            )

    }
}

export default HistoryCards