import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import { addList } from './reducers/taskListSlice';

function App() {
  // const [taskLists, setTaskLists] = useState([]);
  const taskLists = useSelector(state => state.taskList.value);
  const dispatch = useDispatch();

  const createList = () => {
    const tasks = {
      title: 'Deneme',
      childs: [],
    }
    dispatch(addList(tasks))
  };

  return (
    <div className="App">
      <Header createList={createList}/>
      <div className="container">
        {taskLists.map((list, i) => <List index={i} title={list.title} tasks={list.childs} key={i}/>)}
      </div>
    </div>
  );
}

export default App;
