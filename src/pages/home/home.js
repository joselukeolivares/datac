import React from "react";
import Buscador from "../../components/buscador/buscadorIBM";
import '../../css/pages/home.scss'
import TopBarLogged from "../../components/TopBarLogged";
import HistoryCards from "../../components/HistoryCards";
import Categories from '../../components/Categories'
import { Footer } from "../../components/Footer";
import data from '../../data/data.json'




function Home (){
    console.log("hello there")
    console.log(data)
        return (
            <div id="container_Home">
                <div id="topBarLooged-container_home">
                    <TopBarLogged />
                </div>
                <div id="Buscador_container-Home">
                    <Buscador></Buscador>                    
                </div>
                <div id="historyCards_container">
                    <HistoryCards history={data.history}></HistoryCards>
                </div>
                <div id="categories_container-Home">
                    <Categories categories={data.categories}></Categories>
                </div>                
                    <Footer></Footer>                      
                </div>
            )
}

export default Home