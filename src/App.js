import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Other/Home/Home";
import NotFound from "./Components/Other/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <h2 className="">hello hi sobaike</h2>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
