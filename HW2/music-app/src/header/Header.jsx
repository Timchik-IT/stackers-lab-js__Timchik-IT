import React from "react";
import './Header.css';
import logo from './logo.png'

const Header = () => {
    return(
        <div className="header">
            <div className="items">
                <div className="logo-block">
                    <img className="logo" src={logo} alt="Loading.." />
                </div>
                <p className="tittle">Musi-Tims</p>
            </div>
        </div>
    );
};

export default Header;
