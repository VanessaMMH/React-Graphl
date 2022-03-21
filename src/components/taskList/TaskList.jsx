import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Link } from 'react-router-dom';
import '../../assets/styles/GeneralStyles.scss'
import '../taskList/TaskList.scss'
import userIcon from '../../assets/img/people.png';

const TaskList = () => {
          
    const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
    return (
        <>
            <div className="dashboard">
                <div className="table-data">
                    {tasks.length > 0 ? (
                        <table>
                            <thead>
                                <tr >
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th></th>
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
                                            <button className="status completed" onClick={() => toggleTaskDone(task.id)}>
                                                {task.done ? "Undone" : "Done"}</button>
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
               
            </div>

        </>
    )
};

export default TaskList