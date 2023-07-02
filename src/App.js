import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //создаем функцию, с помощью которой можно добавлять новые задачи
  const addTodoHandler = (text) => {
    setTodos([...todos, text]); //формируем новый массив, в котором сначала идут все предыдущие задачи, а потом добавляется новая задача
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
