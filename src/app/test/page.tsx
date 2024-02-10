import React from "react";

const test = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="w-[100%] blur-[920px] absolute h-[40%] bg-brand-primaryPurple/50"></div>
      <div className="">
        <button className="p-2 border rounded-lg bg-pink-400 text-white font-bold">
          This is my test button
        </button>
      </div>
    </div>
  );
};

export default test;
