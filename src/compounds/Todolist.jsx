import React from "react";
import TodoInput from "./TodoInput";
import TodoCard from "./TodoCard";

export default function Todolist(props) {
  let { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
