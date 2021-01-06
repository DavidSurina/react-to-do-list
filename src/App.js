import React, { useState } from "react";

// import css
import "./app.css";

// components
import TodoList from "./Components/TodoList/TodoList";
import InputForm from "./Components/InputForm/InputForm";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  let [input, setInput] = useState("");
  let [id, setID] = useState(0);

  const onSubmit = () => {
    setID(++id);

    const newTodo = {
      id: id,
      task: input,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
    setInput("");
  };

  return (
    <div className="App">
      <InputForm
        onSubmit={onSubmit}
        input={input}
        setInput={(input) => setInput(input)}
      />
      <TodoList todoList={todoList} />
    </div>
  );
}
