import React from "react";

const Todo = ({ todo, handleDelete, handleSelect }) => {
  return (
    <div className="todo">
      {todo.map((div) => {
        return (
          <div className="todo-div" key={div.id}>
            <div className="txt">
              <div>
                <h3>{div.txt}</h3>
           
              </div>
              <div className="dates">
              {div.lastDay && <h2> Date to finish: {div.lastDay}</h2>}
              <p> Date created: {div.date}</p>
              </div>
              
            </div>
            <div className="btn">
              <button
                onClick={(e) => {
                  handleSelect(div, e.target);
                }}
                className="btn-v"
              ></button>
              <button
                onClick={() => {
                  handleDelete(div.id);
                }}
                className="btn-x"
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
