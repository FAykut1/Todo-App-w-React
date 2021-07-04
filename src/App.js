import './App.css';
import Header from './components/Header';
import List from './components/List';

function App() {
  const data = require('./data.json');

  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="input-task-container">
          <input placeholder="Add task"></input>
          <button>+</button>
        </div>
        <List tasks={data?.tasks}/>
      </div>

    </div>
  );
}

export default App;
