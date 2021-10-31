import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import TodoList from "./components/TodoList"

import './App.css';

function App() {

  const [todoActivator, setTodoActivator] = useState(false);
  const [todoButtonHide, setTodoButtonHide] = useState(true);
  const [inputTextTodo, setInputTextTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Completed":
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case "Uncompleted":
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break
      }
    };   
    filterHandler();
  }, [status, todos]);

  return (
    <div className="App">
      <Form 
        todoActivator={todoActivator} setTodoActivator={setTodoActivator} 
        inputTextTodo={inputTextTodo} setInputTextTodo={setInputTextTodo} 
        todos={todos} setTodos={setTodos} 
        status={status} setStatus={setStatus}/>
      <TodoList 
        todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
