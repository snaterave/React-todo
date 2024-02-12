import { useContext, useState } from "react";
import './TodoForm.css';
import { TodoContext } from "components/TodoContext";

function TodoForm(){

    const {
        addTodo,
        setOpenModal
    
    } = useContext(TodoContext);

    const [newTodo, setNewTodo] = useState('');

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodo)
        setOpenModal(false);
    }


    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onChange = (event)=>{
        setNewTodo(event.target.value)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
            value={newTodo}
            onChange={onChange}
            placeholder="cortar cebollas"/>
            <div className="TodoForm-buttonContainer">
            <button 
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
            >
                Agregar
            </button>
            </div>
        </form>
    )
}

export { TodoForm }