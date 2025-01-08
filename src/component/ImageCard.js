import React, { useState } from "react";

const ImageCard = ({ teamDetails }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="border border-[#dddddd] p-4 space-y-5">
      <div className="flex gap-x-5">
        <div className="w-[147px] h-[135px]">
          <img
            src={
              teamDetails.image
                ? teamDetails.image
                : "data:image/png;base64,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"
            }
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
              <li className="border bordersolid p-1 w-fit rounded" key={skill}>
                {skill}
              </li>
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
      <div>
        <p
          className={`${isExpanded ? "" : "line-clamp-4"} text-justify text-sm`}
        >
          {teamDetails.info}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 mt-2 rounded text-xs text-white p-1"
        >
          {isExpanded ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
