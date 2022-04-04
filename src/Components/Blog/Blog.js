import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl py-4">Q1. What is contexApi ?</h2>
        <p className="text-3xl">
          Context API is a way for a react to effectively produce global variables that can be passed around.
          this is the alternative to prop drilling from grandperent to child , child to child and child to
          perent .Context is also touted as an easier,lighter approach to state management using Redux.
        </p>
      </div>
    </div>
  );
};

export default Blog;
