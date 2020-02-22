import React, { useEffect } from "react";
import "./style.css";
import Consumer from "../../configContext";
import API from "../../utils/API";
import DashBtn from "../../components/DashBtn"

const Game = props => {

    const apiTest = () => {
        console.log("BEGGINING API TEST");
        //LOGIN USERNAME TEST
        // var user = {
        //     username: "kqarlos",
        //     email: "kqarlos@hotmail.com",
        //     password: "password",
        // }
        // API.login(user).then(res => {
        //     console.log("USER LOGIN NO SIGNUP");
        //     console.log(user);
        // }).catch(err => {
        //     console.log("ERROR");
        //     console.log(err);
        // });
        // API.signup(user).then(res => {
        //     console.log("USER SIGNUP");
        //     console.log(res);
        // });
        // API.login(user).then(res => {
        //     console.log("USER LOGIN AFTER SIGNUP");
        //     console.log(res);
        // });

        //ITEMS TEST
        // var item = {
        //     name: "item#1",
        //     description: "item#5 description",
        //     src: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382545039107.jpeg",
        //     cost: 100,
        //     icon: "fas fa-pizza-slice"
        // };
        // API.insertItem(item).then(res => {
        //     console.log("ADDING ITEM");
        //     console.log(res);
        // });

        // API.getAllItems().then(res => {
        //     console.log("GETTING ALL ITEMS");
        //     console.log(res);
        // });

        //item#1, item#3, item#5
        // var cart = [
        //     { _id: "5e5096da7a19e25f6449a812", amount: 5 },
        //     { _id: "5e5097077ae1b35898896e74", amount: 4 },
        //     { _id: "5e50972ffd9d5a397c9a864b", amount: 3 }
        // ];

        // API.addItems(cart, "5e4f96ed28ff601d549e0609").then(res => {
        //     console.log("ADDING ITEMS");
        //     console.log(res);
        // });

        // var itemID = {_id: "5e4b6f0555340530a0a90162"}
        //   API.useItem(itemID, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("USING ITEMS");
        //     console.log(res);
        // });

        //PAINTING TEST
        // var painting = {
        //     paintingName: "Painting #1",
        //     painter: "5e4b8c5d2ce57e068478af05",
        //     likes: 0,
        //     value: 0
        // }

        // API.addPainting(painting, "5e4b8c5d2ce57e068478af05").then(res => {
        //     console.log("ADDING PAINTING");
        //     console.log(res);
        // });

        // API.getGallery().then(res => {
        //     console.log("GETTING GALLERY");
        //     console.log(res);
        // });

    }

    useEffect(() => {
        console.log("LOADED!");
        //load user inventory
        apiTest();

    }, []);

    return (
        <Consumer>
            {context => {

                function loadUser() {
                    //Load user Inventory to state upon login
                    if (!context.inventory && context.loggedIn) {
                        context.currentUser.inventory.forEach(item => {
                            API.getItem(item._id)
                                .then(res => {
                                    console.log("ITEM RECEIVED", res);
                                    context.loadUserInventory(res.data, item.amount);
                                });
                        });
                    }
                }

                function getDashboard() {
                    if (context.loggedIn) {
                        return (

                            <div>

                                <div className="row">
                                    <div className="col s12">
                                        <div className="card card-border z-depth-2">
                                            <div className="card-content">
                                                <div className="row">
                                                    <div className="col s2 pr-0 circle">
                                                        <img className="responsive-img circle" src="https://cdn0.iconfinder.com/data/icons/avengers-end-game-1/256/iron_man-512.png" alt="" />
                                                    </div>
                                                    <div className="col s10">
                                                        <h4>Welcome {context.currentUser.email}!</h4>
                                                        <h6>Coins: {context.currentUser.coins}</h6>
                                                    </div>
                                                </div>
                                                <hr />
                                                <p>Unique Items Count: {context.currentUser.inventory.length}</p>
                                                <p>Paintings Count: {context.currentUser.portfolio.length}</p>
                                                <p>Member Since: {context.currentUser.createdAt}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col s6">
                                        <DashBtn link="/shop" name="Store" image="https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg" />
                                    </div>
                                    <div className="col s6">
                                        <DashBtn link="/inventory" name="Inventory" image="https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg" />
                                    </div>
                                </div>
                            </div>


                        )
                    } else {
                        return (

                            <div className="row">
                                <div className="col s12">
                                    <DashBtn link="/login" name="Login" image="https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg" />
                                </div>

                            </div>
                        )
                    }
                }

                return (
                    <div className="container">
                        {loadUser()}
                        {getDashboard()}

                        <div className="row">
                            <div className="col s6">
                                <DashBtn link="/arcade" name={"Arcade"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />
                            </div>
                            <div className="col s6">
                                <DashBtn link="/studio" name={"Studio"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <DashBtn link="/gallery" name={"Gallery"} image={"https://lo35k3w4xot3ofhwt28gospy-wpengine.netdna-ssl.com/wp-content/uploads/2014/01/bigstock-A-surplus-or-oversupply-of-pro-38532283.jpg"} />
                            </div>
                        </div>


                    </div>
                )
            }}


        </Consumer >

    )

}


export default Game;