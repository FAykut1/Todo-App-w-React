import './Header.css';

const Header = ({createList}) => {
  return (
    <div className="header">
      <div>BEST TODO APP EVER</div>
      <button onClick={() => createList()}>Add List</button>
    </div>
  );
}


export default Header;