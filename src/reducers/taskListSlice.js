import { createSlice } from "@reduxjs/toolkit";
import { setLocalStorage, TASK_LISTS } from "../constants/localstorage-vars";

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    value: JSON.parse(localStorage.getItem(TASK_LISTS)) ?? [],
  },
  reducers: {
    addList: (state, action) => {
      state.value.push(action.payload);
      setLocalStorage(TASK_LISTS, state.value);
    },

    removeList: (state, action) => {
      const {index} = action.payload;
      state.value = state.value.filter((v,i) => index !== i);
      setLocalStorage(TASK_LISTS, state.value);
    },

    updateList: (state, action) => {
      // ...
      const { index, title } = action.payload;
      state.value[index].title = title;
      setLocalStorage(TASK_LISTS, state.value);
    },
    
    updateTask: (state, action) => {
      // ...
      const { listIndex, taskIndex, task } = action.payload;
      state.value[listIndex].childs[taskIndex] = task;
      setLocalStorage(TASK_LISTS, state.value);
    },

    addTask: (state, action) => {
      const { index, task } = action.payload;
      state.value[index].childs.push(task);
      setLocalStorage(TASK_LISTS, state.value);
    },

    removeTask: (state, action) => {
      const { listIndex, taskIndex } = action.payload;
      state.value[listIndex].childs = state.value[listIndex].childs.filter((v,i) => i!==taskIndex);
      setLocalStorage(TASK_LISTS, state.value);
    }
  }
});

export const { addList, removeList, updateList, updateTask, addTask, removeTask } = taskListSlice.actions;

export default taskListSlice.reducer;