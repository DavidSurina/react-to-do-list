// Import css files
import "./todo.css";

export default function Todo({ todo, todoList, setTodoList }) {
  const markAsDone = () => {
    const todoUpdatedArray = todoList.map((todoObject) => {
      if (todoObject.id === todo.id) {
        todoObject.isDone = true;
        return todoObject;
      } else {
        return todoObject;
      }
    });
    setTodoList(todoUpdatedArray);
  };

  return (
    <div className="task">
      {console.log(todoList)}
      <p
        className={
          todo.isDone === true ? "task-desc finished" : "task-desc to-finish"
        }
        key={todo.id}
      >
        {todo.task}
      </p>
      <button
        onClick={markAsDone}
        className="task-button fas fa-check"
      ></button>
      <button className="task-button far fa-trash-alt"></button>
    </div>
  );
}
