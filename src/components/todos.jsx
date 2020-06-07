import React from "react";
import Todo from "./todo";

const Todos = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <Todo
          onCheck={props.onCheck}
          todo={todo}
          key={todo.id}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default Todos;
