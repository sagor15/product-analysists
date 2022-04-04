import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppReview from "./Components/appReveiw/AppReview";
import Blog from "./Components/Blog/Blog";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navber from "./Components/Navber/Navber";
import Home from "./Components/Other/Home/Home";
import NotFound from "./Components/Other/NotFound/NotFound";
import Reveiw from "./Components/Review/Reveiw";
import useReveiw from "./Hook/useReveiw";

function App() {
  const [data, setData] = useReveiw();
  return (
    <div className="App">
      <Navber />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Reveiw></Reveiw>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <div>
        <AppReview data={data}></AppReview>
      </div>
    </div>
  );
}

export default App;
