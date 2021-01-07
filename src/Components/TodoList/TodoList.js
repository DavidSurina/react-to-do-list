import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "rgba((31,35,42, 1)" : "1f232a",
    ...draggableStyle,
  });

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
                <Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      class="wrapper"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Todo
                        todo={todo}
                        todoList={todoList}
                        setTodoList={(todoList) => setTodoList(todoList)}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
