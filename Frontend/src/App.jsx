import './App.css'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
// rutas
import About from './components/About'
import Cards from './components/Cards'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorite from './components/Favorites'

// componentes
import Nav from './components/Nav'
import {useState, useEffect} from 'react'


function App () {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [accessToken, setAccessToken] = useState(false);

   let username = 'rick@user.com';
   let password = 'asd123';

   useEffect(() => {
      !accessToken && navigate('/');
   }, [accessToken]);
   
// agregar localstorage
   useEffect(() => {
      const obtenerLS = () => {
         const charactersLS = JSON.parse(localStorage.getItem("characters")) ?? [];
         setCharacters(charactersLS);
      }
      obtenerLS();
   }, []);

   
   useEffect(() => {
      
      localStorage.setItem("characters", JSON.stringify(characters))
   }, [characters])
   

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
    
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
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
         <Route path='/' element={<Form Login={login} Logout={logout}/>} />
         <Route path= '/favorites' element={<Favorite />} />
         <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
      

      
      
    </>
      

  )
}

export default App
