// IMPORT REACT
import React from "react";
import GameCard from "../../components/GameCard";
import Consumer from "../../configContext.js";

const Arcade = () => {


    return (
        <Consumer>

            {context => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col s6">
                                <GameCard game={
                                    {
                                        name: "Memory",
                                        link: "/arcade/memory",
                                        image: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582658916/stock/click_sa3kr1.jpg",
                                        description: "Test you memory"
                                    }}></GameCard>
                            </div>
                            <div className="col s6">
                                <GameCard game={
                                    {
                                        name: "OtherGame",
                                        link: "/arcade/dodge",
                                        image: "https://res.cloudinary.com/artiste-defamme/image/upload/v1582659082/stock/2ndgame_kvou5q.png",
                                        description: "Game Number 2"
                                    }}></GameCard>
                            </div>
                        </div>
                    </div>
                )

            }}


        </Consumer>
    )
}

export default Arcade;