import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import {useState, useEffect} from 'react'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'

function App () {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);

   const [accessToken, setAccessToken] = useState(false);
   let username = 'rick@rickymorty.com';
   let password = 'asd123';

   useEffect(() => {
      !accessToken && navigate('/');
   }, [accessToken]);

   function login (userData) {
      if (userData.email === username && userData.password === password) {
         setAccessToken(true);
         window.alert('Bienvenido');
         navigate('/Home');
      }else {
         window.alert('Usuario o contraseña incorrectos');
      }
   }

   function logout () {
      setAccessToken(false);
   }

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
      {
         location.pathname !== '/' && <Nav onSearch={onSearch} />
      }
      
      
      <Routes >
         <Route path='/About' element={<About />}/>
         <Route path='/Home' element={<Cards characters = {characters} onClose={onClose}/>}/>
         <Route path='/detail/:id' element={<Detail /> }/>
         <Route path='*' element={<h1>404 Not Found</h1>} />
         <Route path='/' element={<Form Login={login} Logout={logout}/>} />

      </Routes>
      

      
      
    </>
      

  )
}

export default App
