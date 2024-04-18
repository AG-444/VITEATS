import "./App.css";
import List from "./components/List/List";
import { Route, Routes } from "react-router-dom";
import Review from "./components/Review/Review";
import Add from "./components/Add/Add";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:id" element={<Review />} />
        <Route path="/edit/:id" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
