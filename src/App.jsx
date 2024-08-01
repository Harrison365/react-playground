import { Routes, Route } from "react-router-dom";
import "./App.css";
import Stuff from "./Stuff";

function App() {
  return (
    <>
      <h1>Always Here</h1>
      <Routes>
        <Route path="" element={<Stuff />} />
        <Route path="/hi" element={<h1>Hi</h1>} />
      </Routes>
    </>
  );
}

export default App;
