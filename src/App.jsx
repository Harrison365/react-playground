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
        {/* add parametric endpoint to show useParams */}
      </Routes>
    </>
  );
}

export default App;
