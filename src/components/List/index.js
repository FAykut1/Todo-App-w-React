import Task from "./Task";
import './List.css';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateList } from "../../reducers/taskListSlice";

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
 
  return (
    <div className="list">
      <div className="list__header">
        <input className="list__title" defaultValue={title} onChange={updateTitle} type="text" />
        <button>x</button>
      </div>
      <div className="input-task-container">
          <input ref={taskInputRef} placeholder="Add task"></input>
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
