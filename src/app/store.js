import { configureStore } from '@reduxjs/toolkit'

import taskListReducer from '../reducers/taskListSlice';


export default configureStore({
  reducer: {
    taskList: taskListReducer
  }
})