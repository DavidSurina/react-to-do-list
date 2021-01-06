// Import css files
import "./todo.css";

export default function Todo({ todo }) {
  return (
    <div className="todocard">
      <div>
        <p>{todo.task}</p>
      </div>
    </div>
  );
}
