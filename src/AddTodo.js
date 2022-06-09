
import React from "react";


const AddTodo = ({getInput, handleInput}) => {


  return (
    <div className="input">
      <input id="input"
        onChange={(e) => {
          getInput(e.target.value.trim());
        }}
        type="text"
        placeholder="What do you have to do?"
      />
      <button onClick={handleInput}>ADD</button>
    </div>
  );
};

export default AddTodo;
