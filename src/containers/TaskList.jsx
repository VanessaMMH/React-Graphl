import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom';
import '../assets/styles/Home.scss';
import '../assets/styles/TaskList.scss';
import Search from '../components/Search';
import userIcon from '../assets/img/people.png';

const TaskList = () => {
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
                                    <th>Date Order</th>
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
                                            <p>John Doe {task.title}</p>
                                        </td>
                                        <td>01-10-2021  {task.description}</td>
                                        <td>
                                            {/* <button> */}
                                                <button className="status completed" onClick={() => toggleTaskDone(task.id)}>
                                                    Completed {task.done ? "Undone" : "Done"}</button>
                                            {/* </button> */}

                                        </td>
                                        <td>
                                            <Link
                                                to={`/edit/${task.id}`}
                                                className="edit"
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
            </div>

        </>

    )

};

export default TaskList