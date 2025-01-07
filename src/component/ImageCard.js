import React from "react";

const ImageCard = ({ teamDetails }) => {
  return (
    <div className="border border-[#dddddd] p-4 space-y-5">
      <div className="flex gap-x-5">
        <div className="w-[147px] h-[135px]">
          <img
            src={teamDetails.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h4 className="uppercase font-semibold text-[#4e4e4e]">
            {teamDetails.name}
          </h4>
          <h5 className="font-light text-sm">{teamDetails.role}</h5>
          <ul className="text-xs text-black flex flex-wrap items-center gap-2">
            {teamDetails.skills.map((skill) => (
              <li className="border bordersolid p-1 w-fit rounded" key={skill}>{skill}</li>
            ))}
          </ul>
          <div className="flex items-center gap-x-2">
            <a
              href={teamDetails.social_media.twitter}
              className="inline-block w-6 h-6 bg-[#0182c4] rounded-full hover:bg-[#428bca]"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/facebook.svg" alt="facebook icon" />
            </a>
            <a
              href={teamDetails.social_media.facebook}
              className="inline-block w-6 h-6 bg-[#428bca] rounded-full hover:bg-[#428bca]"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/twitter.svg" alt="twitter icon" />
            </a>
            <a
              href={teamDetails.social_media.linkedln}
              className="inline-block w-6 h-6 bg-[#428bca] rounded-full hover:bg-[#428bca]"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedln.svg" alt="linkenin icon" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-justify text-sm">{teamDetails.info}</p>
    </div>
  );
};

export default ImageCard;
