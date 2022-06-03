import React from "react";

const Counter = ({className}) => {
  return (
    <div className={`${className} grid grid-cols-3 w-32 h-10 divide-x-2 divide-gray-400 border-2 border-gray-400`}>
      <p className="text-banner-red text-center text-2xl font-semibold">-</p>
      <p className="text-text-blue text-center text-2xl font-normal">1</p>
      <p className="text-green-600 text-center text-2xl font-semibold">+</p>
    </div>
  );
};

export default Counter;
