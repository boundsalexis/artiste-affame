// IMPORT REACT
import React from "react";
import API from "../../utils/API";

const InventoryItem = (props) => {

    return (
        <div>
            {/* ONCE WRITTEN, ADD THE consumeItem FX TO AN onClick LISTENER TO THIS COMPONENT */}
            <div className="col s4">
                <div className="card">
                    <div className="card-image">
                        <img src={props.item.src} />
                        <span className="card-title">{props.item.name}</span>
                        <a className="btn-floating btn-large waves-effect waves-light red right"
                            onClick={() => props.useItem(props.item._id)}>Use</a>

                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col l2">
                                <p>Quantity: {props.amount}</p>
                            </div>
                            <div className="col l10">
                                {props.item.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InventoryItem;