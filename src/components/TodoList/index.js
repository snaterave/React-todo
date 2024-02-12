import './TodoList.css'
//children=esta hace referencia a que React transforma automáticamente a todo lo que se encuentre dentro del componente padre en un elemento "children" , es decir todo lo que se encuentre dentro de una etiqueta de apertura <Component> y una etiqueta de cierre </Component> para React será "Children
function TodoList(props){
  console.log(props)
    return (
      <ul className="TodoList">
        { props.children }
      </ul>
       
    );
  
  }

export { TodoList}