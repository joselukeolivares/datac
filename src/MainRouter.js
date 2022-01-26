import React from "react";
import {Route,Switch} from 'react-router-dom'
import App from "./App";
import Home from "./pages/home/home";
import Login from "./Login"


const MainRouter=()=>{


    return (
        <div>
            <Switch>
               <Route exact path="/" component={Login}></Route>
               <Route exact path="/home" component={Home}></Route>
            </Switch>
        </div>
    )

}

export default MainRouter