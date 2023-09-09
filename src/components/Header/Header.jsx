import React, { useState } from "react";
import "../../styles/Header.scss";
import img2 from "../../Images/logo.png";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="head">
            <header className={`header ${menuOpen ? "open" : ""}`}>
                <div className="logo">
                    <a href="#">
                        <img src={img2} alt="logo" />
                        Annadan
                    </a>
                </div>
                <div className="menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                    <li>
                        <a href="/Search">Search</a>
                    </li>
                    <li>
                        <a href="/Login">Login</a>
                    </li>
                    <li>
                        <a href="/Signup">Signup</a>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
