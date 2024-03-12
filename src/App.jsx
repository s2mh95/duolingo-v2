import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./components/home"
import Lessons from "./components/lessons";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="lessons/*" element={ <Lessons/> } />
    </Routes>
  );
}

export default App;
