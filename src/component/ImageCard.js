import React from "react";

const ImageCard = () => {
  return (
    <div className="border border-[#dddddd] p-4 space-y-5">
      <div className="flex gap-x-5">
        <div className="w-[147px] h-[135px]">
          <img
            src="/images/noimot.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <h4 className="uppercase font-semibold text-[#4e4e4e]">
            Kazeem Olanipekun
          </h4>
          <h5 className="font-light text-sm">Senior Forntend Engineer</h5>
          <ul className="text-xs text-black space-y-2">
            <li className="border bordersolid p-1 w-fit rounded">Web & Mobile</li>
            <li className="border bordersolid p-1 w-fit rounded">Laravel PHP</li>
            <li className="border bordersolid p-1 w-fit rounded">Java</li>
            <li className="border bordersolid p-1 w-fit rounded">Javascript & Jquery</li>
          </ul>
          <div className="flex items-center gap-x-2">
            <span className="inline-block w-6 h-6 bg-[#0182c4] rounded-full hover:bg-[#428bca]">
              <img src="/images/facebook.svg" alt="facebook icon" />
            </span>
            <span className="inline-block w-6 h-6 bg-[#428bca] rounded-full hover:bg-[#428bca]">
              <img src="/images/twitter.svg" alt="twitter icon" />
            </span>
            <span className="inline-block w-6 h-6 bg-[#428bca] rounded-full hover:bg-[#428bca]">
              <img src="/images/linkedln.svg" alt="linkenin icon" />
            </span>
          </div>
        </div>
      </div>
      <p className="text-justify text-sm">
        Olanipekun, Kazeem is a graduate of Ondo State University of Science and
        Technology (OSUSTECH), Okitipupa, Ondo State, Nigeria; he holds a First
        Class, Honourary Bachelor of Technology (B.TECH) Degree in Computer
        Science.
      </p>
    </div>
  );
};

export default ImageCard;
