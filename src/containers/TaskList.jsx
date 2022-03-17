import React from 'react'
import '../assets/styles/Home.scss';
import '../assets/styles/TaskList.scss';
import Search from '../components/Search';
import userIcon from '../assets/img/people.png';
const TaskList = () => {
    return (
        <>
            <Search />

            <div className="dashboard">
                <div className="table-data">
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Date Order</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                        className='search__form--profile'
                                        src={userIcon}
                                        alt="Usuario"
                                    />
                                    <p>John Doe</p>
                                </td>
                                <td>01-10-2021</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className='search__form--profile'
                                        src={userIcon}
                                        alt="Usuario"
                                    />
                                    <p>John Doe</p>
                                </td>
                                <td>01-10-2021</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img
                                        className='search__form--profile'
                                        src={userIcon}
                                        alt="Usuario"
                                    />
                                    <p>John Doe</p>
                                </td>
                                <td>01-10-2021</td>
                                <td><span className="status process">Process</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )

};

export default TaskList