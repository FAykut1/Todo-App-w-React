import { useState } from "react";
import "./Task.css";

const Task = ({index, content, isDone, removeTask}) => {
  const [done, setDone] = useState(isDone);

  const taskCompleted = (e) => {
    //TODO: complete the tast with states

    setDone(!done);
  };
  
  const _removeTask = (e) => {
    //TODO: change this later because its so BAD!
    console.log("Task removed!");
    removeTask(index);
  }

  return (
    <div className={`container__field ${done ? 'checked-field':''}`}>
      <span>{content}</span>
      <div className="field__right">
        <input
          className="checkbox"
          type="checkbox"
          name="field_input"
          id="field_input"
          defaultChecked={done}
          onChange={taskCompleted}
        />
        <button onClick={_removeTask}>x</button>
      </div>
    </div>
  );



};

export default Task;