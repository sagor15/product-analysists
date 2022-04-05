import React from "react";
import useReveiw from "../../Hook/useReveiw";
import "./Review.css";

const Reveiw = () => {
  const [data, setData] = useReveiw();
  //   const [name, id, picture] = data;
  console.log(data.name);

  return (
    <div>
      <h1 className="text-6xl py-12">What our customer say !!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5  ">
        {data.map((item) => (
          <div className="item-div hover:bg-violet-400 hover:text-white">
            <img className="item-img" src={item.picture} alt="" />
            <div className="py-5 pb-5 ">
              <h1 className="text-3xl">{item.name}</h1>
              <p className="py-2 text-xl">" {item.comment} "</p>
              <p className="py-4 text-2xl">
                <span className="text-indigo-600 hover:text-white">Ratings : {item.ratings}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reveiw;
