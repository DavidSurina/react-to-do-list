import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Import components
import Todo from "../Todo/Todo";

// Import css files
import "./todo-list.css";

export default function TodoList({ todoList, setTodoList }) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const [reorderedTodos] = todoList.splice(result.source.index, 1);
    todoList.splice(result.destination.index, 0, reorderedTodos);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="task-droppableId">
        {(provided) => (
          <div
            className="droppableId outer-task-wrapper"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todoList.map((todo, index) => {
              return (
                <Todo
                  index={index}
                  todo={todo}
                  todoList={todoList}
                  setTodoList={(todoList) => setTodoList(todoList)}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
