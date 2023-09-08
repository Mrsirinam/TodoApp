import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  //функция путем вызова функции addTodo добавляет введеный в поле ввода текст в массив задач
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text); //функция для того, чтобы добавить новую задачу в массив задач
    setText(""); //обнуляем строку ввода
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)} //каждый раз, когда пользователь меняет форму, меняется состояние компонента
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
