import React from 'react'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function randomMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    console.log(meme.topText)
    return (
        <main>
            <div className='form'>
                <input type='text' 
                placeholder='Top text' 
                name='topText' 
                className='form-input'
                value={meme.topText}
                onChange={handleChange}
                />

                <input type='text' 
                placeholder='Bottom text' 
                name='bottomText' 
                className='form-input'
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button className='randomize' onClick={randomMeme}>refresh meme page</button>
                
            </div>
            <div className='meme'>
                <img className='memeImg' src={meme.randomImage} />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}