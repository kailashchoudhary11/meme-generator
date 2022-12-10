import React from "react";
import trollFace from "../assets/troll-face.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="" className="header--logo" />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--text">React Course - Project 3</h4>
        </header>
    );
}

export default Header;