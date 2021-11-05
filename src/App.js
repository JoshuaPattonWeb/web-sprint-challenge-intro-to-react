import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Characters from './components/Character';


const App = () => {
    const [people, setPeople] = useState('')
useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then(res => {
    setPeople(res.data)
  })
  .catch(err => {
    console.error(err)
  })
}, [])
  console.log(people)

  // const Character = people.map(stats => stats.name + stats.birth_year + stats)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    
    <div className="App">
        <h1 className="Header">StarWars Characters</h1>
    </div>
    
    
  );
}

export default App;
