import './App.css';
import Header from './components/Header';
import Task from './components/Task';


function App() {

  const data = require('./data.json');

  return (
    <div className="App">
      <Header/>

      <div className="container">
        {
          data?.tasks?.map((v, i) => {
            return <Task key={i} content={v.content} isDone={v.isDone}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
