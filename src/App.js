import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [tasks, setTasks] = useState(null);
  const taskInputRef = useRef();

  useEffect(() => {
    setTasks(require('./data.json')?.tasks);
  },[]);

  const addTask = () => {
    if(taskInputRef.current.value === '') return;

    let task = {
      content: taskInputRef.current.value,
      isDone: false
    };

    tasks.push(task);
    setTasks([...tasks]);

    taskInputRef.current.value = '';
  }

  const removeTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="input-task-container">
          <input ref={taskInputRef} placeholder="Add task"></input>
          <button onClick={addTask}>+</button>
        </div>
        <List tasks={tasks} removeTask={removeTask}/>
      </div>

    </div>
  );
}

export default App;
