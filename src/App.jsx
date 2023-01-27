import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import {useState, useEffect} from 'react'


function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {

    if (characters.some((c) => c.id === parseInt(character))) {
       window.alert('Ya agregaste este personaje');
       return;
    }
    
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <>
      <Nav onSearch={onSearch} />
      <Cards characters = {characters} onClose={onClose}/>
      
    </>
      

  )
}

export default App
