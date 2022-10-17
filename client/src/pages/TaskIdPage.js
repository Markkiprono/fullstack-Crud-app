import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskIdPage = () => {
  const params = useParams();
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const getTask = async () => {
      const { data } = await axios
        .get(`/${params.id}`)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
        });
      setTasks(data);
    };
    getTask();
  });
  return (
    <div>
      <h1>Task Details</h1>
      <div>{tasks._id}</div>
      <div>{tasks.name}</div>
      <div>{tasks.completed}</div>
    </div>
  );
};

export default TaskIdPage;
