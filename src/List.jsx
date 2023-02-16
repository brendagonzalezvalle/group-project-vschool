import React from "react";


export default function List(props){



    return (
        <div className="list--container">
            <h2 className="list--topText">{props.topText}</h2>
            <img className='memeImg'  src={props.randomImage} />
            <h2 className="list--bottomText" >{props.bottomText}</h2>
            
          

            
        </div>
    )
}