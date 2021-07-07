import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../../reducers/taskListSlice";
import "./Task.css";

const Task = ({listIndex, taskIndex, content, isDone}) => {

  const dispatch = useDispatch();
  // updateTask(index, {content, isDone: !isDone})

  const _updateTask = () => {

    const data = {
      listIndex,
      taskIndex,
      task: {
        content,
        isDone: !isDone,
      },
    };

    dispatch(updateTask(data));
  }

  return (
    <div className={`container__field ${isDone ? 'checked-field':''}`}>
      <div className="container__field-content">{content}</div>
      <div className="field__right">
        <input
          className="checkbox"
          type="checkbox"
          name="field_input"
          id="field_input"
          checked={isDone}
          onChange={_updateTask}
        />
        <button onClick={() => dispatch(removeTask({listIndex, taskIndex}))}>x</button>
      </div>
    </div>
  );
};

export default Task;