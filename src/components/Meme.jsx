import React from "react";
import "./Meme.css";

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes));
    }, []);

    function getMemeImage() {
        const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)].url;
        setMeme(prevMeme => ({...prevMeme, randomImage: randomMeme}));
    }
    return (
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text"
                    placeholder="Top Text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}>
                    Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.bottomText}</h2>
                <h2 className="meme--text bottom">{meme.topText}</h2>
            </div>
        </main>
    );
}

export default Meme;