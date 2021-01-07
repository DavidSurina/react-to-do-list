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

  const addTodo = () => {
    if(input){
      setID(++id);

      const newTodo = {
        id: id,
        task: input,
        isDone: false,
      };
      setTodoList([...todoList, newTodo]);
      setInput("");
    }
  };

  return (
    <div className="to-do-list">
      <h1 className="main-heading">TODO List</h1>
      <InputForm
        addTodo={addTodo}
        input={input}
        setInput={(input) => setInput(input)}
      />
      <TodoList
        todoList={todoList}
        setTodoList={(todoList) => setTodoList(todoList)}
      />
    </div>
  );
}
