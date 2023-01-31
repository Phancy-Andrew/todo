import React, { useState } from 'react';
//import { useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditTodo(props) {
    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        e.preventDefault();
        setShow(false);
    }
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    }



    const handleEdit = (e, id) => {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({

                title: e.target.value

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <>
            <button
                onClick={handleShow}
                className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
                Update
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="editmodal" className="w-full max-w-sm" >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                                    Todo
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" defaultValue={props.title} />
                            </div>
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <button onClick={handleClose} className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">Close</button>
                    <button form="editmodal" onSubmit={handleEdit} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Update</button>


                </Modal.Footer>
            </Modal>
        </>
    );
}
export default EditTodo;
