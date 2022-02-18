import React from "react";
import CardCategory from './CardCategory'
import {Dashboard20} from '@carbon/icons-react'
import '../css/components/category.scss'
import { Link } from "carbon-components-react";


const categories=[1,2,3,4,5]
const cardsCategory=[1,2,3,4,5]
function Category(){

    return (
        <React.Fragment>
            {categories.map((category,i)=>{
                return (
                    <div key={`${i}`} className="categoryColumn">
                        <div className="headerCategory">
                            <div className="dashIcon_container dashboardIcon">
                                <Dashboard20/>
                            </div>
                            <div className="nameCategory">
                                <div className="icon "></div>
                                <div>Category</div>
                            </div>
                        </div>
                        <div className="cardsCategory">
                            {cardsCategory.map((element,i)=>{
                                return (
                                    <CardCategory key={`${i}`}></CardCategory>
                                )
                            })}
                        </div>
                        <div className="linkMore">
                            <Link>312 más</Link>
                        </div>
                    </div>
                )
            })}



        </React.Fragment>
    )
}

export {Category}