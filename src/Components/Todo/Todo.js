export default function Todo({ todo }) {
  return (
    <div className="todocard">
      <div className={todo.isDone ? "done" : "undone"}>{todo.task}</div>
    </div>
  );
}
