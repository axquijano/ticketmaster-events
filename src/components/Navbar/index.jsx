import {useState} from 'react';
const Navbar = () => {
    const [search, setSearch ] = useState('');
    const [busqueda , setBusqueda] = useState('');
    function handleInputChange(event){

        setSearch(event.target.value);
    }

    function handleInputKeyPress (event){

        if(event.code=== "Enter"){
            setBusqueda(`Busqueda de  ${search}`);
        }
        
    }
    return (
        <div>
            <p>Mi boletera</p>
            <input 
                placeholder="Busca tu evento favorito" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyPress}
                value={search}
            />
            <p>{search}</p>
            <p>{busqueda}</p>
        </div>
    );
}

export default Navbar; 