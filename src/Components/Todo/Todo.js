// Import css files
import "./todo.css";

export default function Todo({ todo, id }) {
  return (
    <div className="todocard">
      <div>
        <p key={id}>{todo.task}</p>
      </div>
    </div>
  );
}
