// IMPORT REACT
import React from "react";

const StoreItem = (props) => {

    return (
        <div>
            <a 
                className="waves-effect waves-light btn"
                onClick={() => props.addToCart(props.div)}    
            >
                <i className={props.icon}></i>
                    {props.name}
                <i className="fas fa-dollar-sign right"></i>
                    {props.cost}                
            </a>
        </div>
    )

}

export default StoreItem;