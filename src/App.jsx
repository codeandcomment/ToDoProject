
import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
    const [todoList,setTodoList] = useState([]);

    const deleteTodo = (index) => {
      setTodoList((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };
  
  return (
    <div className='app-div'>
      <AddTodo  setTodoList={setTodoList}></AddTodo>
     { todoList.length > 0 && <TodoList todoList={todoList} deleteTodo={deleteTodo}></TodoList>}
    </div>
  )
}

export default App
