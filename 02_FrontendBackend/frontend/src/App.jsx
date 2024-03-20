import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
      <h1>Full Stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (
          <div key={joke.div}>
            <h3>{joke.title} : </h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}
