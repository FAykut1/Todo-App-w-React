import "./Task.css";

const Item = ({content, isDone}) => {

  const taskCompleted = (e) => {
    //TODO: complete the tast with states
  };

  const removeTask = (e) => {
    //TODO: remove task from the list
  }

  return (
    <div className={`container__field ${isDone ? 'checked-field':''}`}>
      <span>{content}</span>
      <div className="field__right">
        <input
          className="checkbox"
          type="checkbox"
          name="field_input"
          id="field_input"
          defaultChecked={isDone}
          onChange={taskCompleted}
        />
        <button onClick={removeTask}>x</button>
      </div>
    </div>
  );
};

export default Item;