import './App.css'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import characters from './data.js'


function App () {
  return (
    <>
      <Navbar />
      <Cards
        characters={characters}
      />
      
    </>
      

  )
}

export default App
