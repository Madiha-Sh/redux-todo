import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/input';
import TodoListItem from './components/todoListItem';

function App() {
  const todoList = useSelector(state => state.todos.todoList)
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map(item => {
            return (
              <TodoListItem key={item.id} {...item}/>
            )
          })}
        </div>
        <Input />
      </div>
    </div>
  )
}

export default App;