import Todo from "../Todo/Todo";

export default function toDoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}
