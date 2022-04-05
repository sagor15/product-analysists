import React from "react";
import { useNavigate } from "react-router-dom";
import useReveiw from "../../../Hook/useReveiw";
import "./Home.css";
const Home = () => {
  const [data, setData] = useReveiw();
  const navigate = useNavigate();
  const handlebtn = () => {
    navigate("/review");
  };
  return (
    <div>
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
      <div>
        <h1 className="text-4xl py-8 pt-5">Customer Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5 cart1 ">
          {data.slice(0, 3).map((item) => (
            <div className="home-cart">
              <img className="item-img" src={item.picture} alt="" />
              <div className="py-5 pb-5 ">
                <h1 className="text-3xl">{item.name}</h1>
                <p className="py-2 text-xl">" {item.comment} "</p>
                <p className="py-4 text-2xl">
                  <span className="text-indigo-600 ">Ratings : {item.ratings}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-appReview" onClick={() => handlebtn()}>
          See Customer Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
