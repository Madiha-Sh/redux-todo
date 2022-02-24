import React from 'react'
import './todoListItem.css'
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoListItem = ({ item, done, id }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className='todoItem'>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <p className={done ? 'todoItem--done' : null}>{item}</p>
    </div>
  )
}

export default TodoListItem