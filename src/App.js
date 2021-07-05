import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [tasks, setTasks] = useState(require('./data.json')?.tasks);
  const taskInputRef = useRef();

  const addTask = () => {
    if(taskInputRef.current.value === '') return;

    let task = {
      content: taskInputRef.current.value,
      isDone: false
    };

    tasks.push(task);
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
    <div className="App">
      <Header/>
      <div className="container">
        <div className="input-task-container">
          <input ref={taskInputRef} placeholder="Add task"></input>
          <button onClick={addTask}>+</button>
        </div>
        <List tasks={tasks} removeTask={removeTask} updateTask={updateTask}/>
      </div>
    </div>
  );
}

export default App;
