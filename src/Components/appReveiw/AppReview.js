import React from "react";

const AppReview = ({ data }) => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5  ">
      {data.map((item) => (
        <div className="">
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
  );
};

export default AppReview;
