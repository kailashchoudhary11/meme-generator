import React from "react";
import "./Meme.css";

function Meme() {
    return (
        <main>
            <form className="form"action="">
                <input 
                className="form--input" type="text" placeholder="Top Text"
                />
                <input 
                className="form--input" type="text" placeholder="Bottom Text"
                />
                <button className="form--button">
                    Get a new meme image  🖼
                </button>
            </form>
        </main>
    );
}

export default Meme;