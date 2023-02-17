import React from 'react'
import List from './List'



export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])

    const [listMemes, setListMemes] = React.useState([])
    
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

    function addToList (){
        console.log("add to list was clicked!!")
        setListMemes(prev =>  {
        return [...prev, meme]
    })
    console.log(listMemes)
    }

    const mapOverList = listMemes.map(function(items, index){
        return <List 
            key = {index}
            topText={items.topText}
            bottomText={items.bottomText}
            randomImage={items.randomImage}
        />
       
    })
    console.log(mapOverList)


    return (
        <main className='main'>
            <div className='form'>
                <div className='input-container'>
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
                </div>

                <button className='randomize' onClick={randomMeme}>Refresh Meme Page! </button>
            </div>

            <div className='meme'>
                <div className='meme-container'>
                    <img className='memeImg' src={meme.randomImage} />
                    <h2 className='meme-text top'>{meme.topText}</h2>
                    <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                </div>
            </div>
            
            <button onClick={addToList}className="addToList">Add To List!</button>

            <div className="list--container">
                {mapOverList}
            </div>
            
        </main>
    )
}