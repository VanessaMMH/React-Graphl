import React from 'react'
import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import '../assets/styles/components/Dashboard.scss';
import '../assets/styles/components/TaskForm.scss';

const TaskForm = () => {



  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
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
    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
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
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Write a title"
          autoFocus
        />
        <textarea
         className='controls' 
         value={task.description}
         name="description"
         rows="2"
         placeholder="write a description"
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