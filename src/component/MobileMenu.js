import React from "react";

const MobileMenu = ({ handleMenu, setActive, navItems, active }) => {
  return (
    <div className="bg-[#030E12] text-white fixed top-[88px] z-[20] right-0 left-0 px-10 w-full pt-[27px] h-[547px] md:hidden transition-all ease-out duration-[3s]">
      <ul className="flex flex-col gap-y-[58px] pt-[37px]" onClick={handleMenu}>
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`hover:text-[#428bca] pb-2 ${
              active === item.name
                ? "rounded-b-2 text-[#428bca]"
                : ""
            }`}
            onClick={() => setActive(item.name)}
          >
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-x-2 mt-10">
        <li className="w-6 h-6 bg-[#404040] rounded-sm hover:bg-[#428bca]">
          <a href="https://www.facebook.com" aria-label="Facebook">
            <img src="/images/facebook.svg" alt="facebook icon" />
          </a>
        </li>
        <li className="w-6 h-6 bg-[#404040] rounded-sm hover:bg-[#428bca]">
          <a href="https://twitter.com" aria-label="Twitter">
            <img src="/images/twitter.svg" alt="twitter icon" />
          </a>
        </li>
        <li className="w-6 h-6 bg-[#404040] rounded-sm hover:bg-[#428bca]">
          <a
            href="https://www.linkedin.com/in/ismail-oguntoyinbo-904aaa80/"
            aria-label="LinkedIn"
          >
            <img src="/images/linkedln.svg" alt="linkenin icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
