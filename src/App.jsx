import {useState} from 'react';
import Navbar  from './components/Navbar'; 
import Events from './components/Events'
import './App.css'


function App() {
  const [searchValue , setSearchValue] = useState('');
  
  function handleNavbarSearch (term){
      setSearchValue(term)
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch}/>
      <Events searchValue={searchValue}/>
    </>
  )
}

export default App
