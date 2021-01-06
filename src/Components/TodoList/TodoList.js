// Import components
import Todo from "../Todo/Todo";

// Import css files
import "./todo-list.css";

export default function toDoList({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}
