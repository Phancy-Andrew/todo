
import TodoItem from "./TodoItem";

const TodoList = ({ removeTodo, completeTodo, importantTodo, sortedTodos, updateTodo }) => {
    return (
        <ul>
            {sortedTodos.map((todo) => (

                <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id} updateTodo={updateTodo} />

            ))}
        </ul>
    );
}
export default TodoList;

