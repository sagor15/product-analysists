import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex justify-center	justify-items-center ">
      <div className="mt-12	">
        <h1 className="text-6xl">Comfortable Headphone</h1>
        <h1 className="text-5xl text-indigo-500 mt-5	">Your Headphone </h1>
        <p className="text-base mt-5">
          This headphone is the best headphone in market . it's a comfortable for us ..
        </p>
        <button className="bg-indigo-400 text-white px-8 py-3 text-base rounded-lg	 mt-10">Buy Now</button>
      </div>
      <div>
        <img className="img" src="https://fv9-3.failiem.lv/thumb_show.php?i=ezckq4mfe&view" alt="" />
      </div>
    </div>
  );
};

export default Home;
