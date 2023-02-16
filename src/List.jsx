import React from "react";


export default function List(props){

    function handleClick() {
        console.log('i work')
    }

    return (
        <div className="list--container">
            <div className="list-objects">
                <h2 className="list--topText">{props.topText}</h2>
                <img className='memeImg'  src={props.randomImage} />
                <h2 className="list--bottomText" >{props.bottomText}</h2>
            </div>
                <button onClick={handleClick}>Edit</button>
                <button>Delete</button>
        </div>
    )
}