import jane from '../../projects/src/images/jane.png'
import smilga from '../../projects/src/images/smilga.png'
import janedev from '../../projects/src/images/jane.png'
import joecoder from '../../projects/src/images/joecoder.png'
import mattdesigner from '../../projects/src/images/mattdesginer.png'
import { useState, useEffect } from 'react'

const tourData = [{
    id: 1,
    image: jane,
    title: 'Best Of Paris In 7 Days Tour',
    description: 'Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...',
    readMore: "the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!"
},
{
    id: 2,
    image: smilga,
    title: 'Best Of Ireland In 14 Days Tour',
    description: 'Rick Steves Best of Ireland tour kicks off with the best of Dublin, followed by Ireland`s must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...',
    readMore: "ingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!"
},
{
    id: 3,
    image: janedev,
    title: 'Best Of Salzburg & Vienna In 8 Days Tour',
    description: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...",
    readMore: "is region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!"
},
{
    id: 4,
    image: joecoder,
    title: 'Best Of Rome In 7 Days Tour',
    description: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...",
    readMore: "Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!"
},
{
    id: 5,
    image: mattdesigner,
    title: 'Best Of Poland In 10 Days Tour',
    description: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...",
    readMore: "ou'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!"
},

]

const TourData = () => {
    const [read, setRead] = useState(false)

    const handleReadMore = (id) => {
        const cards = read.filter(card => card.id === id)
        if (cards) {
            setRead(true)
        }
    }

    useEffect(() => {

    })
    return (
        <>
            {read.map((tourCard) => {
                const { id, title, image, description, readMore } = tourCard
                return (
                    <>
                        <img className='tourCard-image' src={image}></img>
                        <h3 className='tourCard-title'>key={id} {title}</h3>
                        <p className='tourCard-description'>{description}</p>
                        <button>Read More...</button>
                        {readMore && <p>{() => handleReadMore}</p>}
                    </>
                )
            })}
        </>
    )
}



export default TourData