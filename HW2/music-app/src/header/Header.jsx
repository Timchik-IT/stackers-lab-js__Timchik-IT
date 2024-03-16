import React from "react";
import './Header.css';
import logo from './logo.png'

const Header = () => {
    return(
        <div class="header">
            <div class="items">
                <div class="logo-block">
                    <img class="logo" src={logo} alt="Loading.." />
                </div>
                <p class="tittle">Musi-Tims</p>
            </div>
        </div>
    );
};

export default Header;
