import logo from './logo.svg';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
import React, { useState, useEffect } from 'react'
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const users = await fetch(url)
      const data = await users.json()
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }


  if (loading) {
    return <main>
      <Loading />
    </main>
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default App;
