import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";

const MobileMenu = ({ handleMenu, setActive, navItems, active }) => {
  return (
    <div className="bg-white showdow  fixed top-[88px] z-[20] right-0 left-0 px-10 w-full pt-[27px] h-[547px] md:hidden transition-all ease-out duration-[3s]">
      <ul className="flex flex-col gap-y-[58px] pt-[37px]" onClick={handleMenu}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`hover:text-[#C87759] pb-2 ${
              active === item.name ? "rounded-b-2 text-[#C87759]" : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-x-2 mt-10">
        <li className="w-6 h-6 rounded-sm">
          <a
            href="http://www.intiqotech.com/"
            aria-label="webiste"
              target="_blank"
            rel="noreferrer"
          >
           <BsGlobe2 className="text-[#404040] hover:text-[#C87759]"/>
          </a>
        </li>
        <li className="w-6 h-6 rounded-sm ">
          <a
            href="mailto:info@intiqotech.com"
            aria-label="message"
          >
            <FaRegEnvelope className="text-[#404040] hover:text-[#C87759]"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
