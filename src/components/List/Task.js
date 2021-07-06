import "./Task.css";

const Task = ({index, content, isDone, removeTask, updateTask}) => {

  return (
    <div className={`container__field ${isDone ? 'checked-field':''}`}>
      <span>{content}</span>
      <div className="field__right">
        <input
          className="checkbox"
          type="checkbox"
          name="field_input"
          id="field_input"
          checked={isDone}
          onChange={() => updateTask(index, {content, isDone: !isDone})}
        />
        <button onClick={() => removeTask(index)}>x</button>
      </div>
    </div>
  );
};

export default Task;