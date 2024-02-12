import { useContext } from 'react';
import { TodoContext } from 'components/TodoContext';
import './TodoCounter.css';

// Una forma de enviar estilos
/*const estilos = {
  backgroundColor:'red',
  fontSize: '24px',
  textAlign:'center',
  margin: 0,
  padding:'48px'
}*/
// props = se puede destructurar
// <h1 style={estilos}>
function TodoCounter(){
  const {completedTodos,totalTodos } = useContext(TodoContext);
    
  return (
      <h1 className="TodoCounter">
        Has completado { completedTodos } de { totalTodos } TODOS
      </h1>
    );
  
  }

export { TodoCounter}