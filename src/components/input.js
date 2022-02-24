import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './Input.css'
import { saveTodo } from '../features/todoSlice';

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
      if(input.length){
        console.log(`adding ${input}`);
        dispatch(saveTodo({
            item: input,
            done: false,
            id: uuidv4()
        }))
        setInput('')
      } else {
        console.log('write a todo');
      }
    };

  return (
      <div className='input'>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} name='input'/>
        <button onClick={addTodo}>Add!</button>
      </div>
  )
}

export default Input