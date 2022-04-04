import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navber from "./Components/Navber/Navber";
import Home from "./Components/Other/Home/Home";
import NotFound from "./Components/Other/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navber />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
