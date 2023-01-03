import React, { useState, useEffect } from 'react';
import styles from "./components/Todo.module.css";
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // 새로고침 후에도 상태 유지
  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    filterSet();
    saveTodos();
  }, [todos, status]);

  const filterSet = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        //filter : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos)); //todos Json문자열로 반환
  };

  const getTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos')); 
      //Json문자열 분석 후 Js값으로 생성
      setTodos(todoLocal);
    }
  };

  return (
    <div className={styles.App}>
      <header>
        <h1>To do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;