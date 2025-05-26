import React from "react";

const Card = ({ title, list, image }) => {
  return (
    <div className="flex flex-col gap-x-5 bg-white rounded p-5 py-10 justify-center items-center">
      <div className="w-20 h-20 rounded-full">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="4/6 pt-6">
        <h2 className="text-2xl text-black capitalize text-center font-semibold">{title}</h2>
        <ul className="pt-4 list-disc text-black/50 space-y-3">
          {list?.map((_list) => (
            <li key={_list}>{_list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
