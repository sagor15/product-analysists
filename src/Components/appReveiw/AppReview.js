import React from "react";

const AppReview = (props) => {
  const { name, picture, ratings, comment } = props.data;
  

  return (
    <div>
      {
          props.data.map()
      }
    </div>
  );
};

export default AppReview;
