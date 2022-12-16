import React from "react";
import "./Meme.css";
import memesData from "../memesData";

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });
    const [memeImages, setMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memes = memeImages.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)].url;
        setMeme(prevMeme => ({...prevMeme, randomImage: randomMeme}));

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
            {meme.randomImage && 
                <img 
                    src={meme.randomImage} 
                    alt="Random Meme" 
                    className="meme--img"
                />
            }
        </main>
    );
}

export default Meme;