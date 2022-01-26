import React from 'react'
import {Menu32,UserFilled32,ShoppingCart32} from '@carbon/icons-react'
import Search from 'carbon-components-react/lib/components/Search'
import '../css/components/topBarLogged.scss'

class TopBarLogged extends React.Component{

    render(){
        return (
            <div id="topBarLogged_container">
                <div id="burgerMenu_container">
                    <Menu32 class="carbon_icon"/>
                    <div className='text'>Data Coppel</div>
                </div>
                <div id="loggedSearh-section">
                    <div id="userIcon_container">
                        <UserFilled32 className='carbon_icon'/>
                        <div className='text'>Logout</div>
                    </div>
                    <div id="Search_container">
                        <Search
                            id="search-1"
                        placeHolderText="Search" />
                    </div>
                    <div id="carShop_container">
                        <ShoppingCart32 className='carbon_icon'/>
                    </div>
                </div>


            </div>
        )
    }
}

export default TopBarLogged