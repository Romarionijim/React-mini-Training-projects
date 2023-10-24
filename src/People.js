import jane from '../../projects/src/images/jane.png'
import smilga from '../../projects/src/images/smilga.png'
import janedev from '../../projects/src/images/janedev.png'
import joecoder from '../../projects/src/images/joecoder.png'
import mattdesigner from '../../projects/src/images/mattdesginer.png'
import { useState } from 'react'

const peopleObj = [{
    id: 1,
    image: jane,
    firstName: 'Bertie',
    lastName: 'Yates',
    age: `29 years`
},
{
    id: 2,
    image: janedev,
    firstName: 'Hester',
    lastName: 'Hogan',
    age: `32 years`
},
{
    id: 3,
    image: mattdesigner,
    firstName: 'Larry',
    lastName: 'Little',
    age: `36 years`
},
{
    id: 4,
    image: smilga,
    firstName: 'Sean',
    lastName: 'Walsh',
    age: `34 years`
},
{
    id: 5,
    image: joecoder,
    firstName: 'Matt',
    lastName: 'Fox',
    age: `29 years`
},

]
const People = () => {
    const [people, setPeople] = useState(peopleObj)

    const clearAll = () => {
        setPeople([])
    }

    const clearPerson = (id) => {
        let newPeople = people.filter(person => person.id !== id)
        setPeople(newPeople)
    }

    const restorePeopleObject = () => {
        setPeople(peopleObj)
    }

    const restorePerson = (id) => {
        let oldPeople = people.filter(person => person.id === id)
        setPeople(oldPeople)
    }

    const addPeople = () => {
        setPeople((currentState) => [
            ...currentState,
            {
                id: 6,
                image: mattdesigner,
                firstName: 'Larry',
                lastName: 'Little',
                age: `36 years`
            }
        ])
    }

    return (
        <>
            <h3>{peopleObj.length} birthdays today</h3>
            {people.map((person) => {
                const { id, image, firstName, lastName, age } = person
                return (
                    <article key={id} className='person'>
                        <img src={image}></img>
                        <div>
                            <h4>{firstName} {lastName}</h4>
                            <p>{age}</p>
                        </div>
                        <button className='clear-person' onClick={() => clearPerson(id)}>Clear Person</button>
                        {/* <button className='restore-person' onClick={() => restorePerson(id)}>Restore Person</button> */}
                    </article>

                )
            })}
            <button className='clear' onClick={clearAll}>Clear All</button>
            <button className='clear' onClick={addPeople}>add</button>
            {/* <button className='clear' onClick={restorePeopleObject}>Restore All</button> */}
        </>
    );
}


export default People