import React from 'react'
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import '../dashboard/Dashboard.scss';
import './TaskForm.scss';

const TaskForm = () => {

  const [task, setTask] = useState({
    id: "",
    fullName: "",
    email: "",
  });
  const { addTask, updateTask, tasks } = useContext(GlobalContext);

  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    navigate("/tasks");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        fullName: taskFound.fullName,
        email: taskFound.email,
      });
    }
  }, [params.id, tasks]);

  return (
    <div className='dashboard'>
      <form onSubmit={handleSubmit} className="form-register">
        <h2 className="text-3xl mb-7">
          {task.id ? "Update " : "Create "}A Task
        </h2>
        <input
          className='controls' 
          type="text"
          name="fullName"
          value={task.fullName}
          onChange={handleChange}
          placeholder="Write a fullName"
          autoFocus
        />
        <textarea
         className='controls' 
         value={task.email}
         name="email"
         rows="2"
         placeholder="write a email"
         onChange={handleChange}
         ></textarea>
        <button className='botons'>
            {task.id ? "Update Task" : "Create Task"}
          </button>

      </form>

    </div>

  );
}

export default TaskForm;