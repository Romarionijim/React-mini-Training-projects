import React, { useState, useEffect } from 'react'
import ToursHeader from "./ToursHeader"

const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
    const [card, setCard] = useState([])
    const [readMore, setReadMore] = useState(false)

    const getUsers = async () => {
        const users = await fetch(url);
        const jsonData = await users.json()
        setCard(jsonData)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const notInterested = (id) => {
        const matchingCard = card.filter(tourCard => tourCard.id !== id)
        setCard(matchingCard)
    }

    return (
        <>
            <div className="cards-container">
                <ToursHeader />
                <div className='card-list'>
                    {card.map((tour) => {
                        const { id, name, info, image, price } = tour
                        return (<div className='card' key={id}>
                            <img className='card-image' src={image}></img>
                            <div className='name-info'>
                                <h3 className='card-name'>{name}</h3>
                                {readMore ? info : `${info.substring(0, 200)}...`}
                                <button className='readmore' onClick={() => setReadMore(!readMore)}>
                                    {readMore ? 'show less' : 'read more'}
                                </button>
                            </div>
                            <span className='card-price'>${price}</span>
                            <NotInterestedButton id={id} notInterested={notInterested} />
                        </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const NotInterestedButton = ({ id, notInterested }) => {
    return (
        <button type='button' className="not-interested-button" onClick={() => notInterested(id)}>Not Interested</button>
    )
}


export default Tours