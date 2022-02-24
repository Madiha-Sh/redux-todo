import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          state.todoList.push(action.payload)
      },

      setCheck: (state, action) => {
          state.todoList.map(item => {
              if(item.id === action.payload) {
                  if(item.done === true) {
                      item.done = false
                  } else {
                      item.done = true
                  }
              }
          })
      }
  }
});

export const { saveTodo, setCheck } = todoSlice.actions

export default todoSlice.reducer