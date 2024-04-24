import "./App.css";
import List from "./components/List/List";
import { Route, Routes } from "react-router-dom";
import Review from "./components/Review/Review";
import Add from "./components/Add/Add";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/:id" element={<Review />} />
        <Route path="/edit/:id" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
