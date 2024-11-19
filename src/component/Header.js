import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="border-b border-[#ccc] p-6 flex items-center justify-between fixed w-full bg-white z-20">
        <span className="inline-block ml-6">
          <img src="" alt="Company logo" />
        </span>
        <div className="flex items-center gap-x-8">
          <ul className="flex items-center gap-x-8 font-sm">
            <li className="hover:text-[#428bca]">Home</li>
            <li className="hover:text-[#428bca]">About Us</li>
            <li className="hover:text-[#428bca]">Our Services</li>
            <li className="hover:text-[#428bca]">Our Uniquesness</li>
            <li className="hover:text-[#428bca]">Our Partners</li>
            <li className="hover:text-[#428bca]">Contact</li>
          </ul>
          <ul className="flex items-center gap-x-2">
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
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <img src="/images/linkedln.svg" alt="linkenin icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
