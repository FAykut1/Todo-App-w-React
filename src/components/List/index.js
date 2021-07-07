import Task from "./Task";
import './List.css';
import { useState, useRef, useEffect } from "react";
import { TASK_LIST } from "../../constants/localstorage-vars";

const List = ({title}) => {
  const [tasks, setTasks] = useState([]);

  const taskInputRef = useRef();

  useEffect(() => {
    const _tasks = JSON.parse(localStorage.getItem(TASK_LIST));
    setTasks(_tasks ?? []);
  }, []);



  const addTask = () => {
    if(taskInputRef.current.value === '') return;
    let task = {
      content: taskInputRef.current.value,
      isDone: false
    };
    tasks.push(task);
    localStorage.setItem(TASK_LIST, JSON.stringify(tasks));
    setTasks([...tasks]);
    taskInputRef.current.value = '';
  };

  const removeTask = (index) => {
    let _tasks = tasks.filter((v, i) => {
      return i !== index;
    });
    
    setTasks(_tasks);
  };

  const updateTask = (index, updatedTask) => {
    let _tasks = tasks;
    _tasks[index] = updatedTask;
    setTasks([..._tasks]);
  };

  return (
    <div className="list">
      <div className="list__header">
        <input className="list__title" type="text" />
        <button>x</button>
      </div>
      <div className="input-task-container">
          <input ref={taskInputRef} placeholder="Add task"></input>
          <button onClick={addTask}>+</button>
      </div>
      <div className="list__container">

        {tasks?.map((v, i) => {
          return <Task key={i} index={i} content={v.content} isDone={v.isDone} removeTask={removeTask} updateTask={updateTask}/>;
        })}

      </div>
    </div>
  );
};

export default List;
