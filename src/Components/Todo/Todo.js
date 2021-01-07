// Import css files
import "./todo.css";

export default function Todo({ todo, todoList, setTodoList }) {
  //Mark as done/undo function using ternary operator
  const markAsDone = () => {
    const todoUpdatedArray = todoList.map((todoObject) => {
      if (todoObject.id === todo.id) {
        //todoObject.isDone = true;
        todoObject.isDone === true ? todoObject.isDone = false : todoObject.isDone = true;
        return todoObject;
      } else {
        return todoObject;
      }
    });
    setTodoList(todoUpdatedArray);
  };

  const deleteTask = (event) => {
    todoList.map((todoObject) => {
      if(todoObject.id === parseInt(event.target.parentNode.id)) {
        const index = todoList.indexOf(todoObject);
        todoList.splice(index, 1);
      }
    });
    setTodoList([...todoList]);
  }

  return (
    <div 
      id={todo.id} 
      className="task">
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
        className={todo.isDone === false ? "task-button fas fa-check" : "task-button fas fa-undo"}
      ></button>
      <button onClick={deleteTask} className="task-button far fa-trash-alt"></button>
    </div>
  );
}
