import { useContext } from 'react';
import { TodoContext } from 'components/TodoContext';
import { TodoCounter } from 'components/TodoCounter';
import { TodoSearch } from 'components/TodoSearch';
import { TodoList } from 'components/TodoList';
import { TodoItem } from 'components/TodoItem';
import { CreateTodoButton } from 'components/CreateTodoButton';
import { TodoLoading } from 'components/TodoLoading';
import { TodoError } from 'components/TodoError';
import { TodoEmpty } from 'components/TodoEmpty';
import { Modal } from './Modal';
import { TodoForm } from 'components/TodoForm'; 

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);
  console.log(' openModal = ', openModal)
    return (
        <>
          <TodoCounter />
          <TodoSearch />
              <TodoList> 
              {loading && <TodoLoading total={4} />}
              {error && <TodoError />}
              {(!loading && searchedTodos.length === 0) &&  <TodoEmpty />}


              {searchedTodos.map( (todo,i) => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={()=> {completeTodo(i)}}
                  onDelete={()=> {deleteTodo(i)}}
                />
              ))}
            </TodoList> 
          <CreateTodoButton 
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          
          {
            
            openModal && (
              <Modal>
                <TodoForm />
              </Modal>
              )
          }
          
        </> 
      );
}

export { AppUI}