import React from 'react';
import Todo from './ToDo';
import styles from "./Todo.module.css";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className={styles.todoContainer}>
      <ul className={styles.todoList}>
        {filteredTodos.map(todo => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
