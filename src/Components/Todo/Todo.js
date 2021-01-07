import { Draggable } from "react-beautiful-dnd";

// Import css files
import "./todo.css";

export default function Todo({ todo, todoList, setTodoList, index }) {
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

  const deleteTask = (event) => {
    todoList.map((todoObject) => {
      if(todoObject.id === parseInt(event.target.parentNode.id)) {
        const index = todoList.indexOf(todoObject);
        todoList.splice(index, 1);
      }
    });
    setTodoList([...todoList]);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "white" : "#1f232a",
    ...draggableStyle,
  });

  return (
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          id={todo.id} 
          className="task"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <p
            className={
              todo.isDone === true
                ? "task-desc finished"
                : "task-desc to-finish"
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
      )}
    </Draggable>
  );
}
