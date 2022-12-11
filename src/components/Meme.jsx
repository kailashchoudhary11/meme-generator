import React from "react";
import "./Meme.css";
import memesData from "../memesData";

function Meme() {
    const [imageUrl, setImageUrl] = React.useState();
    function getMemeImage() {
        const memes = memesData.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        setImageUrl(url => randomMeme.url);
    }
    return (
        <main>
            <div className="form">
                <input 
                className="form--input" type="text" placeholder="Top Text"
                />
                <input 
                className="form--input" type="text" placeholder="Bottom Text"
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image  🖼
                </button>
            </div>
            {imageUrl && 
                <img 
                    src={imageUrl} 
                    alt="Random Meme" 
                    className="meme--img"
                />
            }
        </main>
    );
}

export default Meme;