import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TaskIdPage from "./pages/TaskIdPage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/NewTask" element={<TasksPage />} />
          <Route path="/:id" element={<TaskIdPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
