import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import { addList } from './reducers/taskListSlice';

function App() {
  const taskLists = useSelector(state => state.taskList.value);
  const [createTitleValue, setCreateTitleValue] = useState('');
  const dispatch = useDispatch();

  const createList = () => {
    const tasks = {
      title: createTitleValue,
      childs: [],
    }
    dispatch(addList(tasks))
    setCreateTitleValue('');
  };

  const createListInputChange = (e) => {
    const title = e.target.value ?? '';
    if(title === '') return;
    setCreateTitleValue(title);
  };

  const inputKeyDown = (e) => {
    if(e.key === 'Enter'){
      createList();
    }
  }


  return (
    <div className="App">
      <Header createList={createList}/>
      <div className="container">
        {taskLists.map((list, i) => <List index={i} title={list.title} tasks={list.childs} key={i}/>)}
        <div className="create-list">
          <input className="create-list__input" placeholder="Create List" value={createTitleValue} onKeyDown={inputKeyDown} onChange={createListInputChange}/>
          <button className="create-list__button" onClick={() => createList()}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
