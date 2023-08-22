import React from "react";

const Header = () => {
    return (
        <header classname="header">
            <div className="info">
                <p>Welcome to our website</p>
            </div>
            <div className="contact">
                <p>Contact us for more information</p>
                <button type="submit">Submit</button>
            </div>
        </header>
    );
};

export default Header;
