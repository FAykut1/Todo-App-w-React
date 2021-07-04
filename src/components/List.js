import Task from "./Task";
import './List.css';
import { useState } from "react";

const List = ({tasks, removeTask}) => {
  const [pressed, setPressed] = useState(false);
  const [pos, setPos] = useState([0,0]);
  const [offset, setOffset] = useState([0,0]);

  const mouseDown = (e) => {
    if(e.target.nodeName !== 'DIV') return;
    setPressed(true);
    let x = e.clientX - e.target.parentElement.offsetLeft;
    let y = e.clientY - e.target.parentElement.offsetTop;
    setOffset([x,y]);
    setPos([e.clientX - x, e.clientY - y]);
  };

  const mouseMove = (e) => {
    if(!pressed) return;
    setPos([e.clientX - offset[0], e.clientY - offset[1]]);
  };

  const mouseUp = (e) => {
    setPressed(false);
    setOffset([0,0]);
    setPos([0, 0]);
  };


  return (
    <div className="list" onMouseMove={mouseMove} onMouseDown={mouseDown} onMouseUp={mouseUp} style={{left: pos[0], top:pos[1], position: pressed ? 'absolute' : 'unset'}}>
      {tasks?.map((v, i) => {
        return <Task key={i} index={i} content={v.content} isDone={v.isDone} removeTask={removeTask}/>;
      })}
    </div>
  );
};

export default List;
