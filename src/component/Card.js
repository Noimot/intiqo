import React from "react";

const Card = ({ title, paragraph, image }) => {
  return (
    <div className="flex gap-x-5 bg-white rounded p-5 py-10">
      <div className="w-4/6 h-3/6">
        <img src={image} alt="" className="w-full h-full"/>
      </div>
      <div className="4/6">
        <h2 className="text-xl text-[#787878] capitalize">{title}</h2>
        <p className="pt-3">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
