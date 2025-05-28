import React from "react";
import { PartnersSlider } from "./Slider";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import { BiSolidBusiness } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";

const IndustriesServed = () => {
  const indusrties = [
    {
      link: "",
      src: <FaHouse className="text-[#C87759]/80 group-hover:text-white w-20 h-20 relative left-10"/>,
      alt: "Microfinance institutions (MFIs)",
    },
    {
      link: "",
      src: <IoMdCheckmark className="text-[#C87759]/80 group-hover:text-white w-20 h-20 relative left-10"/>,
      alt: "Fintech startups",
    },
    {
      link: "",
      src: <FaHouse className="text-[#C87759]/80 group-hover:text-white w-20 h-20 relative left-10"/>,
      alt: "Government agencies",
    },
    {
      link: "",
      src: (
        <HiOutlineBanknotes className="text-[#C87759]/80 group-hover:text-white w-20 h-20 relative left-10" />
      ),
      alt: "Insurance and pension firms",
    },
    {
      link: "",
      src: <BiSolidBusiness className="text-[#C87759]/80 group-hover:text-white w-20 h-20 relative left-16"/>,
      alt: "SMEs and largescale enterprises",
    },
  ];
  return (
    <section
      className="bg-[#4e4e4e] py-20 px-10 sm:px-14 md:px-20 lg:px-40"
      id="partners"
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-semibold text-center text-[#C87759]">
          Industries served
        </h1>
      </div>
      <div className="mt-10">
        <PartnersSlider images={indusrties} imgText/>
      </div>
    </section>
  );
};

export default IndustriesServed;
