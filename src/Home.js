
import React, { useEffect, useState } from "react";
import "./App.css";
//import TodoModal from "./components/TodoModal"

import TodoForm from "./components/TodoForm";
//import TodoItem from "./components/TodoItem";
import TodoList from "./components/Todolist";
//import axios from 'axios';
import ReactPaginate from 'react-paginate';
//import EditModal from "./components/EditModal";

function Home() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [limit, setLimit] = useState(5);
    //const [page, setPage] = useState(1);

    const [idToUpdate, setIdToUpdate] = useState();




    useEffect(() => {
        const fetchFilter = async (filter) => {

            const res = await fetch(
                //`http://localhost:3004/todo?_page=${currPage}&_limit=${limit}`
                `https://jsonplaceholder.typicode.com/todos?${filter}`
            )
            const filtered = await res.json();
            return filtered;

        };
        const updateFilter = async () => {
            const completed = await fetchFilter(filter);
            // console.log(completed);
            setTodos(completed);
        };
        updateFilter();
    }, [filter])

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch(
                // `http://localhost:3004/todo?_page=1&_limit=${limit}`
                `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setPageCount(Math.ceil(total / 5));
            // // console.log(Math.ceil(total/12));

            setTodos(data);
            //setPage(1);

        };

        getTodos();
    }, []);

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch(
                // `http://localhost:3004/todo?_page=1&_limit=${limit}`
                `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setPageCount(Math.ceil(total / limit));
            // // console.log(Math.ceil(total/12));

            setTodos(data);
            //setPage(1);

        };

        getTodos();
    }, [limit]);
    // useEffect(

    //   , [filter])

    const putTodos = async (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: { id },
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    const fetchTodos = async (currPage) => {
        const res = await fetch(
            //`http://localhost:3004/todo?_page=${currPage}&_limit=${limit}`
            `https://jsonplaceholder.typicode.com/todos?_page=${currPage}&_limit=${limit}`
        )
        const data = await res.json();
        return data;
    };
    const handlePageClick = async (data) => {
        //console.log(data.selected);

        let currPage = data.selected + 1;

        const todosFromServer = await fetchTodos(currPage);

        setTodos(todosFromServer);


    };



    const addTodo = (title) => {
        let id = 1;
        if (todos.length > 0) {
            id = todos[0].id + 1
        }
        let todo = { id: id, title: title, completed: false, important: false, userId: id }
        let newTodos = [todo, ...todos]
        setTodos(newTodos)
    };



    const removeTodo = (id) => {
        // // let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        // // console.log(id);
        // setTodos(updatedTodos);
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`
            // `http://localhost:3004/todo/${id}`
            , {
                method: 'DELETE'
            }).then((res) => {
                res.json().then(() => {
                    // console.warn(resp);
                    fetchTodos();
                })
            })
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const importantTodo = (id) => {
        let updateTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.important = !todo.important
            }
            return todo
        })

        setTodos(updateTodos)
    }

    const updateTodo = (id) => {
        const toUpdate = [...todos].find((todo) => todo.id === id);

        setIdToUpdate(toUpdate);
        console.log(idToUpdate);
    }

    let sortedTodos = todos.sort((a, b) => b.important - a.important);



    return (
        <div className="todo-app">


            <h1>Todo List</h1>
            <div className="dropdown">

                <select value={limit} onChange={e => setLimit(e.target.value)} >
                    <option value={5}>5</option>
                    <option value={10}>10</option>

                    <option value={20}>20</option>
                </select>
            </div>
            <button onClick={handlePageClick} className="todo-row ">All</button>
            <button value="completed=true" onClick={e => setFilter(e.target.value)} className="todo-row ">completed</button>
            <button value="completed=false" onClick={e => setFilter(e.target.value)} className="todo-row ">Incomplete</button>
            {/* <select value={filter} onChange={e => setFilter(e.target.value)}>
         <option value="">All</option> 
        <option value="completed=false">Incomplete</option>
        <option value="completed=true">completed</option>
      </select> */}
            <TodoForm addTodo={addTodo} putTodos={putTodos} idToUpdate={idToUpdate} />
            <hr className="seperator" />
            <TodoList importantTodo={importantTodo} completeTodo={completeTodo} removeTodo={removeTodo} sortedTodos={sortedTodos} updateTodo={updateTodo} />


            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />

        </div>

    );
}

export default Home;