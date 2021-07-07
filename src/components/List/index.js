import Task from "./Task";
import './List.css';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask, removeList, updateList } from "../../reducers/taskListSlice";

const List = ({index, title, tasks}) => {

  const taskInputRef = useRef();
  const dispatch = useDispatch();

  const _addTask = () => {
    if(taskInputRef.current.value === '') return;
    let task = {
      content: taskInputRef.current.value,
      isDone: false
    };

    dispatch(addTask({index, task}));

    taskInputRef.current.value = "";
  };

  const updateTitle = (e) => {
    const _title = e.target.value;
    if(_title && _title !== title){
      dispatch(updateList({index, title: _title}))
    }
  }

  const _deleteTaskList = () => {
    dispatch(removeList({index}));
  }

  const taskInputOnKeyDown = (e) => {
    if(e.key === 'Enter'){
      _addTask();
    }
  }
 
  return (
    <div className="list">
      <div className="list__header">
        <input className="list__title" defaultValue={title} onChange={updateTitle} type="text" />
        <button onClick={_deleteTaskList}>x</button>
      </div>
      <div className="input-task-container">
          <input ref={taskInputRef} onKeyDown={taskInputOnKeyDown} placeholder="Add task"></input>
          <button onClick={_addTask}>+</button> 
      </div>
      <div className="list__container">
        {tasks?.map((v, i) => {
          return <Task key={i} listIndex={index} taskIndex={i} content={v.content} isDone={v.isDone}/>;
        })}
      </div>
    </div>
  );
};

export default List;
