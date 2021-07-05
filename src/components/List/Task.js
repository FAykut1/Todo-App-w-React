import { useState } from "react";
import "./Task.css";

const Task = ({index, content, isDone, removeTask, updateTask}) => {

  const _removeTask = (e) => {
    //TODO: change this later because its so BAD!
    console.log("Task removed!");
    removeTask(index);
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
          checked={isDone}
          onChange={() => updateTask(index, {content, isDone: !isDone})}
        />
        <button onClick={_removeTask}>x</button>
      </div>
    </div>
  );



};

export default Task;