import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import "./App.css";
//import useFetch from "../src/components/useFetch";
import NextTodo from "./components/NextTodo";
import useFetch from "./components/useFetch";
const Details = () => {
    const { id } = useParams();
    // const { data: todo, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/todos/' + id);
    console.log(id);
    return (
        <NextTodo id={id} useFetch={useFetch} />
    );
}

export default Details;


// const { id } = useParams();
// const { data: todo, error, isPending } = useFetch('https://jsonplaceholder.typicode.com/todos/' + id);



// return (
//     <div className="details">
//         {isPending && <div>Loading...</div>}
//         {error && <div>{error}</div>}
//         {todo && (
//             <div className="details">
//                 <h2>{todo.title}</h2>

//                 <h2>the task is : {todo.completed ? 'Completed' : 'Not completed'}</h2>
//                 <Link to={`/`}>
//                     <h2>Go back to HomePage</h2>
//                 </Link>
//                 <Link to={`/nextpage/:newId`}>
//                     <h2>Go To next Todo</h2>
//                 </Link>

//             </div>
//         )}
//     </div>