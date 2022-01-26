import React from "react";
import Card from "./Card"
import '../css/components/historyCards.scss'

class HistoryCards extends React.Component{

    render(){

    return    (
                <React.Fragment>
                <div id="cardsContainer">
                    <h3>Últimas búsquedas</h3>
                    <div id="CardsCarrusel">
                        <Card></Card>
                    </div>
                </div>
                </React.Fragment>
            )

    }
}

export default HistoryCards