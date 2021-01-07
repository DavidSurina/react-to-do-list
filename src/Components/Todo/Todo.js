// Import css files
import "./todo.css";

export default function Todo({ todo, todoList, setTodoList }) {
  const markAsDone = () => {
    const todoUpdatedArray = todoList.map((todoObject) => {
      if (todoObject.id === todo.id) {
        //todoObject.isDone = true;
        todoObject.isDone === true
          ? (todoObject.isDone = false)
          : (todoObject.isDone = true);
        //console.log(todoObject);
        return todoObject;
      } else {
        return todoObject;
      }
    });
    setTodoList(todoUpdatedArray);
  };

  const deleteTask = () => {
    todoList.map((todoObject) => {
      if (todoObject.id === todo.id) {
        todoList.splice(todoObject, 1);
      }
      console.log(todoList);
    });
    setTodoList([...todoList]);
  };

  return (
    <div className="task">
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
        className={"task-button fas fa-check"}
        className={
          todo.isDone === false
            ? "task-button fas fa-check"
            : "task-button fas fa-undo"
        }
      ></button>
      <button
        onClick={deleteTask}
        className="task-button far fa-trash-alt"
      ></button>
    </div>
  );
}
