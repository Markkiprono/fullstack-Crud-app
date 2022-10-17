import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const { data } = await axios
        .get("/")
        .then((res) => res.data)
        .catch((err) => console.log(err));
      setTasks(data);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <button>
        <Link to="/NewTask">Add a new Task</Link>
      </button>
      <div>
        <h1>All Tasks</h1>
      </div>
      <div>
        <h1>Task Manager</h1>
      </div>
      <div>{loading ? <h2>Loading...</h2> : <h2>{tasks.length} Tasks</h2>}</div>
      <div>
        {tasks.map((task) => (
          <div key={task._id}>
            <Link to={`/${task._id}`}>
              <h3>{task.name}</h3>
              <p>{task.completed}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
