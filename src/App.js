import React, { useState } from "react";
import "./app.css";

// components
import TodoList from "./Components/TodoList/TodoList";

export default function App() {
  let [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onSubmit = () => {
    const newTodo = {
      id: todoList.length + 1,
      task: input,
      isDone: false,
    };
    if (todoList.length === 0) {
      setTodoList(todoList.concat(newTodo));
    } else {
      setTodoList([...todoList, newTodo]);
    }
    setInput("");
  };

  return (
    <div className="App">
      <div className="InputForm">
        <input
          value={input}
          onInput={(event) => setInput(event.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
      <TodoList todoList={todoList} />
    </div>
  );
}
