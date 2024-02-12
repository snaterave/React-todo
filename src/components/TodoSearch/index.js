import { useContext } from 'react';
import { TodoContext } from 'components/TodoContext';
import './TodoSearch.css';

function TodoSearch(){
  const {searchValue,setSearchValue } = useContext(TodoContext);
 
    return (
      <input 
        className="TodoSearch" 
        placeholder="Picar cebolla"
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value)
        }}
        />
       
    );
  
  }

export { TodoSearch}