import React, { useState } from "react";
import axios from "axios";
const TasksPage = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/", { name: name })
      .then((res) => res.data)
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add a task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TasksPage;
