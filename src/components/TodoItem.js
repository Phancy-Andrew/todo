import React from 'react'
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCheckCircle } from "react-icons/bi"
import EditTodo from './EditTodo'
import { Link } from 'react-router-dom'

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>

            <Link to={`/details/${todo.id}`}>
                {todo.title}
            </Link>
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
                <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)} />
                <BiCheckCircle onClick={() => completeTodo(todo.id)} />
                {/* <button onClick={() => updateTodo(todo.id)}>Edit</button> */}
                <EditTodo title={todo.title} />

            </div>

        </div>

    )
}