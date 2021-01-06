// Import css files
import './todo.css';

export default function Todo({ todo, id }) {
  return (
    <div className="task to-finish">
      <p className="task-desc" key={id}>
        {todo.task}
      </p>
      <button className="task-button fas fa-check"></button>
      <button className="task-button far fa-trash-alt"></button>
    </div>
  );
}
