import { createContext } from 'react';
import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const TodoContext = createContext();

function TodoProvider({children}){

  // Controla la lista de TODOS
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);
  
  // Controla los datos enviados en el input
  // React.useState(""); = Se inicializa en vacio
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Informacion del contador de TODOS
  const completedTodos = todos.filter((todo)=> todo.completed ).length;
  const totalTodos = todos.length;
  
  // COntrola el buscador
  const searchedTodos = todos.filter( (todo)=>{
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

 
  // Actualiza los items completados
  const completeTodo = (todoIndex) =>{
    const newTodos = [...todos]; // copiamos todos los todos
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

   // Actualiza los items borrados
   const deleteTodo = (todoIndex) =>{
    const newTodos = [...todos]; // copiamos todos los todos
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  const addTodo =(newTodo) =>{
    const newTodos = [...todos]; // copiamos todos los todos
    newTodos.push({
      text: newTodo,
      completed: false
    });

    saveTodos(newTodos);

  }

  // Actualiza el modal
  

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }