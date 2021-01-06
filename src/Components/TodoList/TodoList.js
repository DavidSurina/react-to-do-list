// Import components
import Todo from "../Todo/Todo";

// Import css files
import "./todo-list.css";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <div className="task-wrapper">
      {todoList.map((todo) => {
        return (
          <Todo
            todo={todo}
            todoList={todoList}
            setTodoList={(todoList) => setTodoList(todoList)}
          />
        );
      })}
    </div>
  );
}
