import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const [taskLists, setTaskLists] = useState([]);

  const createList = () => {
    console.log("List created!");
    const list = <List key={taskLists.length + 1}/>

    taskLists.push(list);

    setTaskLists([...taskLists]);
  };

  return (
    <div className="App">
      <Header createList={createList}/>
      <div className="container">
        {taskLists}
      </div>
    </div>
  );
}

export default App;
