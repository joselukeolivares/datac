import React from "react";
import {Route,Switch} from 'react-router-dom'
import App from "./App";
import Home from "./pages/home/home";
import Login from "./Login"
import { DashboardCarbon } from "./components/DashboardCarbon";


const MainRouter=()=>{


    return (
        <div>
            <Switch>
               <Route exact path="/" component={Login}></Route>
               <Route exact path="/home" component={Home}></Route>
               <Route exact path="/dashboardCarbon" component={DashboardCarbon}></Route>
            </Switch>
        </div>
    )

}

export default MainRouter