import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom';
import '../assets/styles/Home.scss';
import '../assets/styles/TaskList.scss';
import Search from '../components/Search';
import userIcon from '../assets/img/people.png';
// import { GET_ALL_PEOPLE } from '../graphql/query';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_PEOPLE = gql`
query{
    users{
    id
    fullName
    email
    
    }
}
`;



const TaskList = () => {
    console.log("sdb");
    const result = useQuery(GET_ALL_PEOPLE)
    console.log("sdvks",result);
    console.log("sdb");
        
    const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
    return (
        <>
            <Search />

            <div className="dashboard">
                <div className="table-data">
                    {tasks.length > 0 ? (

                        <table>
                            <thead>
                                <tr >
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (

                                    <tr key={task.id}>
                                        <td>
                                            <img
                                                className='search__form--profile'
                                                src={userIcon}
                                                alt="Usuario"
                                            />
                                            <p> {task.fullName}</p>
                                        </td>
                                        <td> {task.email}</td>
                                        <td>
                                            {/* <button> */}
                                            <button className="status completed" onClick={() => toggleTaskDone(task.id)}>
                                                {task.done ? "Undone" : "Done"}</button>
                                            {/* </button> */}

                                        </td>
                                        <td>
                                            <Link
                                                to={`/edit/${task.id}`}
                                                className="status progress"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    ) : (
                        <p >No Tasks yet</p>
                    )}
                </div>
                <div className="gq">

                </div>
            </div>

        </>

    )

};

export default TaskList