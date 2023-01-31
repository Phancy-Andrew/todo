import React, { useState } from "react";


export default function TodoForm({ idToUpdate, addTodo, putTodos }) {
    const [input, setInput] = useState("");



    const handleUpdate = (e) => {

        e.preventDefault();

        // console.log(idToUpdate.title);
        // setInput(idToUpdate.title.title);


        //putTodos(idToUpdate.id);
    }
    return (
        <>

            <form onSubmit={handleUpdate} className="todo-form">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="todo-input"
                    placeholder="Add a todo"
                />
                <button type="submit" className="todo-button">{idToUpdate ? "update" : "Add Todo"}</button>
            </form>
        </>
    );
}