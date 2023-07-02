import Todo from "./Todo";

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />); //для каждого полученного методом map todo возвращаем компонент Todo
}

export default TodoList;
