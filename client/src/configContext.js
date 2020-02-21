import React, { Component, createContext } from "react";
//imports react dependencies

import API from "../src/utils/API";
//object destructing into a provider and consumer
const { Provider, Consumer } = createContext();

//HAVE TO DEFINE PROVIDER BECAUSE ITS PROVIDING, DONT HAVE TO DEFINE CONSUMER BECAUSE ITS JUST USING THOSE VALUES
//consumer is useless without provider
class ConfigProvider extends Component {

    //sets the global state variables we need
    state = {
        loggedIn: false,
        currentUser: {},
        marketplace_items: [],
        cart: [],
        gallery: [],
        bet: 0,
        login: (success, user) => {
            console.log("LOGIN STATE", success, user);
            if (success) {
                this.setState({ currentUser: user, loggedIn: true });
            } else {
                this.setState(this.state);
            }
        },
        logout: () => {
            console.log("LOGGIN OUT");
            this.setState({ currentUser: "", loggedIn: false });
        },
        loadInventory: (inventory) => {
            this.setState({ marketplace_items: inventory })
        },
        loadShownPaintings: (paintings) => {
            console.log("Loading the gallery...")
            this.setState({ gallery: paintings });
            console.log(this.state.gallery)
        }

    }

    render() {
        return (
            <Provider value={{
                // values to send down
                loggedIn: this.state.loggedIn,
                currentUser: this.state.currentUser,
                marketplace_items: this.state.marketplace_items,
                cart: this.state.cart,
                gallery: this.state.gallery,
                totalCoins: this.state.totalCoins,
                gameEarnings: this.state.gameEarnings,
                bet: this.state.bet,

                // functions to send down
                login: this.state.login,
                logout: this.state.logout,
                loadInventory: this.state.loadInventory,
                loadShownPaintings: this.state.loadShownPaintings
            }}>
                {/*lets us see our children components  */}
                {this.props.children}
            </Provider>
        )
    }
}
export { ConfigProvider };

export default Consumer;
