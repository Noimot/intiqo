import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-5 bg-[#2e2e2e] text-white p-5 text-sm items-center justify-between">
      <div className="text-base flex items-center gap-5">
        {" "}
        <div className="text-base flex items-center gap-2">
          <FaPhoneAlt /> <span>+234 806 983 6515</span>
        </div>
        <div className="text-base flex items-center gap-2">
          <FaRegAddressCard />
          15 Adekoya Mende, Maryland
        </div>
      </div>
      <div className=" ">
        {" "}
        &copy; INTIQO TECHNOLOGY SERVICE LIMITED.{" "}
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
