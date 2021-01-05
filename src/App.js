import React, { useState } from "react";
import "./app.css";
import InputForm from "./Components/InputForm/InputForm";

// components
import TodoList from "./Components/TodoList/TodoList";

export default function App() {
  let [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  let [id, setID] = useState(0);

  const onSubmit = () => {
    setID(++id);
    const newTodo = {
      id: id,
      task: input,
      isDone: false,
    };
    console.log(todoList);
    setTodoList([...todoList, newTodo]);
    setInput("");
    console.log(todoList);
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
