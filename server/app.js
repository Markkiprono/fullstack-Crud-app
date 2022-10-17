const express = require("express");
const app = express();
const TaskRouter = require("./Routes/Tasks");
const connectDB = require("./db/config");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
connectDB();
app.use(cors());

app.use(errorHandler);
app.use("/api/v1/tasks", TaskRouter);
app.use(express.json());
app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
