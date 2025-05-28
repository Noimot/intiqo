import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { BsGlobe2 } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState("Home"); // Default active item
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((state) => !state);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header>
      <nav className="border-b border-[#ccc] p-6 flex items-center justify-between fixed w-full bg-white z-20">
        <span className="inline-block ml-6 w-10 h-10">
          <img src="/intiqo-logo.jpeg" alt="Company logo" />
        </span>
        <div className="hidden md:flex items-center gap-x-8">
          <ul className="flex items-center gap-x-8 font-sm">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`hover:text-[#C87759] pb-2 ${
                  active === item.name
                    ? "border-b-2 border-[#C87759] rounded-b-2 text-[#C87759]"
                    : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-x-2">
            <li className="w-6 h-6 rounded-sm">
              <a
                href="http://www.intiqotech.com/"
                aria-label="webiste"
                target="_blank"
                rel="noreferrer"
              >
                <BsGlobe2 className="text-[#404040] hover:text-[#C87759]" />
              </a>
            </li>
            <li className="w-6 h-6 rounded-sm ">
              <a href="mailto:info@intiqotech.com" aria-label="message">
                <FaRegEnvelope className="text-[#404040] hover:text-[#C87759]" />
              </a>
            </li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-y-1 md:hidden cursor-pointer"
          onClick={handleMenu}
        >
          <span
            className={`inline-block bg-[#C87759] border-[#C87759] [border-solid border-2 w-6 origin-left ease-in transition-all duration-[1s] ${
              menu && "rotate-45"
            }`}
          />
          <span
            className={`inline-block  bg-[#C87759] border-[#C87759]  border-solid border-2 w-6 origin-left ease-in transition-all duration-[1s] ${
              menu && "opacity-0"
            }`}
          />
          <span
            className={`inline-block  bg-[#C87759] border-[#C87759]  border-solid border-2 w-6 origin-left ease-in transition-all duration-[1s] ${
              menu && "-rotate-45"
            }`}
          />
        </div>
        {menu && (
          <MobileMenu
            menu={menu}
            handleMenu={handleMenu}
            setActive={setActive}
            navItems={navItems}
            active={active}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
