import { useState ,useEffect} from "react";
import TodoInput from "./compounds/TodoInput";
import Todolist from "./compounds/Todolist";

function App() {

  const [todos,setTodos]=useState([]);
  const [todoValue,setTodoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList=[...todos,newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index){
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex !== index;
    })
    persistData(newTodoList);
    setTodos(newTodoList);
  }

   function handleEditTodo(index){
    const valueTobeEdited=todos[index];
    setTodoValue(valueTobeEdited);
    handleDeleteTodo(index);
   }
  
   useEffect(()=>{
    if(!localStorage){
      return;
    }

    let localTodos=localStorage.getItem('todos');
    if(!localTodos){
      return;
    }

    localTodos=JSON.parse(localTodos).todos;
    setTodos(localTodos);

   },[])

  return (
    <main>
    <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
    <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </main>
  )
}

export default App
