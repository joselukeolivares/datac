import React from "react";
import Buscador from "../../components/buscador/buscadorIBM";
import '../../css/pages/home.scss'
import TopBarLogged from "../../components/TopBarLogged";
import HistoryCards from "../../components/HistoryCards";
import Categories from '../../components/Categories'

function Home (){
        return (
            <div id="container_Home">
                <div id="topBarLooged-container_home">
                    <TopBarLogged />
                </div>
                <div id="Buscador_container-Home">
                    <Buscador></Buscador>                    
                </div>
                <div id="historyCards_container">
                    <HistoryCards></HistoryCards>
                </div>
                <div id="categories_container-Home">
                    <Categories></Categories>
                </div>
                
        
            </div>
            )
}

export default Home