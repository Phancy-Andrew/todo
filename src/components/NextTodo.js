//import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from 'react-router-dom'
import useFetch from "./useFetch";
const NextTodo = (props) => {
    const { id } = props;
    //  console.log(id);

    let a = parseInt(id);

    let newId = a + 1;
    console.log(newId);


    const { data: todo, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/todos/' + newId);


    return (
        <div className="details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {todo && (
                <div className="details">
                    <h2>{todo.title}</h2>

                    <h2>the task is : {todo.completed ? 'Completed' : 'Not completed'}</h2>
                    <Link to={`/`}>
                        <h2>Go back to HomePage</h2>
                    </Link>
                    <Link to={`/nextpage/${newId}`}>
                        <h2>Go To next Todo</h2>
                    </Link>


                </div>
            )}
        </div>
    );
}

export default NextTodo;
