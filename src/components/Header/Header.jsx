import React, { useState, useEffect } from "react";
import "../../styles/Header.scss";
import img2 from "../../Images/logo.jpg";
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        }; 
    }, []);

    return (
        //<div className="head">
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <img src={img2} alt="logo" />
                    </a>
                </div>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                        <li className="items">
                            <a href="/">Home</a>
                        </li>
                        <li className="items">
                            <a href="/Contact">Contact</a>
                        </li>
                        <li className="items">
                            <a href="/Search">Search</a>
                        </li>
                        <li className="items">
                            <a href="/Login">Login</a>
                        </li>
                        <li className="items">
                            <a href="/Signup">Signup</a>
                        </li>
                    </ul>
                )}
                <button onClick={toggleNav} className="btn">
                    BTN
                </button>
            </div>
        </header>
        //</div>
    );
};

export default Header;
