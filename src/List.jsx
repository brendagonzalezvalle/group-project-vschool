import React, { Fragment } from "react";
import { useState } from "react";


export default function List(props){
    const [isShown, setIsShown] = useState(true)
    const [showEdit, setShowEdit] = useState(false)
    const [listItem, setListItem] = useState(
        {
            topText: props.topText,
            bottomText: props.bottomText,
            randomImage: props.randomImage
        }
    )

    function handleChange() {
        const {name, value} = event.target
        setListItem(prevState => {
            return (
                {
                    ...prevState,
                    [name]: value
                }
            )
        })
    }

    function showEditInput() {
        // console.log('i work')
        setShowEdit(prevState => !prevState)
    }

    function deleteMeme() {
        return setIsShown(prevState => !prevState)
    }

    return (
        <div className="list--container">
            {isShown &&
                <Fragment>
                    <div className="list-objects">
                        <h2 className="list--topText">{listItem.topText}</h2>
                        <img className='memeImg'  src={listItem.randomImage} />
                        <h2 className="list--bottomText" >{listItem.bottomText}</h2>
                    </div>
                    {
                        showEdit &&
                        <Fragment>
                            <input
                                name='topText'
                                onChange={handleChange}
                                value={listItem.topText}
                            >
                            </input>
                            <input
                                name='bottomText'
                                onChange={handleChange}
                                value={listItem.bottomText}
                            >
                            </input>
                        </Fragment>
                    }
                        <button onClick={showEditInput}>
                            {showEdit ? 'Save': 'Edit'}
                        </button>
                        <button onClick={deleteMeme}>Delete</button>
                </Fragment>
            }
        </div>
    )
}