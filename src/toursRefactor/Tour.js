import React, { useState } from 'react'

const Tour = ({ id, image, name, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article className='single-tour'>
            <img src={image} alt={name}></img>
            <footer>
                <div className='tour-info'>
                    <h3>{name}</h3>
                    <h3 className='tour-price'>{price}</h3>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour