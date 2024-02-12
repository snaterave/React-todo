import { TodoProvider } from 'components/TodoContext';
import { AppUI } from './AppUI';

// HOOK: Permite abstraer funcionalidades que pueden ser genericas

// Componente
function App() {
  
   // elementos a retornar, estos elementos son .jsx
   
   return (
   <TodoProvider>
     <AppUI />
   </TodoProvider>
   
      
   
  );
}


export default App;
