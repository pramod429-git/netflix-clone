import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {Array(16)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-40 h-56 bg-gray-300 rounded-lg shadow-md animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
