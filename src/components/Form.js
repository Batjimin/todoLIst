import React from 'react';
import styles from './Todo.module.css'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitTodo = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random()},
    ]);
    setInputText('');
  };

  const statusHandler = e => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className={styles.todoInput}
      />
      <button onClick={submitTodo} className={styles.addButton} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className={styles.select}>
        <select onChange={statusHandler} name="todos" className={styles.filterTodo}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
