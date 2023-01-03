import React from 'react';
import styles from "./Todo.module.css"

const Todo = ({ text, todo, todos, setTodos }) => {
  
  const deleteTodo = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };
  //기존 todo의 id와 다를 경우 

  const completeTodo = () => {
    setTodos(
      todos.map(el => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed, // 현 상태와 반대로
          };
        }
        return el;
      })
    );
  };

  return (
    <div className={styles.todo}>
      <li className={`todo-item ${todo.completed ? styles.completed : ''}`}>
        {text}
      </li>
      <button onClick={completeTodo} className={styles.completeBtn}>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className={styles.trashBtn}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );

};

export default Todo;