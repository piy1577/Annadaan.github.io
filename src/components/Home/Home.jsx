import React from "react";
import img1 from "../../Images/hunger.jpg";
import img2 from "../../Images/dog2.jpg";
import { motion } from "framer-motion";
import "../../styles/Home.scss";
// import Card from "./Card";

const Home = () => {
    return (
        <div className="home">
            <div className="image">
                <img src={img1} alt="no image" />
                <div className="backdrop">
                    <h1>Annadaan</h1>
                </div>
            </div>
            <div className="about">
                <h1>About us </h1>
            </div>
            <div className="card">
                <div className="poster">
                    <img src={img2} alt=" no image" />
                </div>
                <h1>this is card 1</h1>
            </div>
        </div>
    );
};

export default Home;
