import React from "react";

const Card = ({ title, paragraph, image }) => {
  return (
    <div className="flex gap-x-5 bg-white rounded p-5 py-10">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className="text-xl text-[#787878] capitalize">{title}</h2>
        <p className="pt-3">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
