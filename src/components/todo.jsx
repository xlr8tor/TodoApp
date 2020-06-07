import React from "react";
import "../custom.css";

const Todo = (props) => {
  return (
    <div className="card">
      <h5 className="card-header">Date Added: {props.todo.date}</h5>
      <div className="card-body">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => props.onCheck(props.todo)}
        />
        {props.todo.completed ? (
          <p className="card-text strike">{props.todo.todo}</p>
        ) : (
          <p className="card-text">{props.todo.todo}</p>
        )}

        <button
          className="btn btn-danger delete"
          onClick={() => props.onDelete(props.todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
