import React from "react";

const Counter = ({ className, onDecrease, value, onIncrease }) => {
  return (
    <div
      className={`${className} grid grid-cols-3 w-32 h-10 divide-x-2 divide-gray-400 border-2 border-gray-400`}
    >
      <button
        onClick={onDecrease}
        className="text-banner-red text-center text-2xl font-semibold"
      >
        -
      </button>
      <p className="text-text-blue text-center text-2xl font-normal">{value}</p>
      <button
        onClick={onIncrease}
        className="text-green-600 text-center text-2xl font-semibold"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
