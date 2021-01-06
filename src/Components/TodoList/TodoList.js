// Import components
import Todo from "../Todo/Todo";

// Import css files
import "./todo-list.css";

export default function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
