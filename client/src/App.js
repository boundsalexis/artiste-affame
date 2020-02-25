import * as React from "react";
import { ConfigProvider } from "./configContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/NavBar";
import Wrapper from "./components/Wrapper";

// PAGES
import Homepage from "./pages/Homepage";
import Studio from "./pages/Studio"
import Store from "./pages/Store";

// CART
import Cart from "./pages/Cart";

import Gallery from "./pages/Gallery";
import Login from "./pages/LogIn";
import Inventory from "./pages/Inventory";
import Arcade from "./pages/Arcade";
import GameMemory from "./pages/GameMemory";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <ConfigProvider>
        <Router>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/studio" component={Studio} />
            <Route exact path="/store" component={Store} />

            {/* CART */}
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/arcade" component={Arcade} />
            <Route exact path="/arcade/memory" component={GameMemory} />
          </Wrapper>
        </Router>
      </ConfigProvider>
    </div>
  );
}

export default App;
