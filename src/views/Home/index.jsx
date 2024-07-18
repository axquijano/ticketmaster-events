import {useState, useRef} from 'react';
import Navbar  from '../../components/Navbar'; 
import Events from '../../components/Events'

const Home = () =>{
    
  const [searchValue , setSearchValue] = useState('');
  const containerRef = useRef();

  function handleNavbarSearch (term){
    // console-log(containerRef.current.setSearch(""));
      setSearchValue(term)
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef}/>
      <Events searchValue={searchValue}/>
      {/* <SignupForm></SignupForm> */}
    </>
  )
}

export default Home;