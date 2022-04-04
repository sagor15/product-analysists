import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl py-4">Q1. What is contexApi ?</h2>
        <p className="text-3xl">
          Context API is a way for a react to effectively produce global variables that can be passed around.
          this is the alternative to prop drilling from grandperent to child , child to child and child to
          perent .Context is also touted as an easier,lighter approach to state management using Redux. The
          context API can be used to share data multiple components whith out pass data manually. some cases
          use context api example: theming,userl language , authentication, etc.
        </p>
      </div>
      <div>
        <h2 className="text-5xl py-4">Q2. Difference between inline vs inline-block ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl py-4 text-bold">Inline Element</h2>
            <p className="text-xl py-2">
              1. Inline element displays an element any width and height properties will have no effect.
            </p>
            <p className="text-xl py-2">
              2. Inline Element can't set property margin top,margin buttom and padding top , padding buttom
            </p>
            <p className="text-xl py-2">3. Allow to other element sit to their left and right.</p>
            <p className="text-xl py-2">4.not use for inline-block create navigation link </p>
          </div>
          <div>
            <h2 className="text-3xl py-4">Inline-block Element</h2>
            <p className="text-xl py-2">
              1.Inline element displays an element any width and height properties will you set.
            </p>
            <p className="text-xl py-2">
              2. Inline Element can set property margin top,margin buttom and padding top , padding buttom
            </p>
            <p className="text-xl py-2">3. Allow to other element sit to their left and right.</p>
            <p className="text-xl py-2">
              4. One common use for inline-block create navigation link list items horizontally instead of
              vertically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
