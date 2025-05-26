import React from "react";
import { FaHandshakeAngle } from "react-icons/fa6";
import { SiGoogleearthengine } from "react-icons/si";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { PiCertificateDuotone } from "react-icons/pi";

export const CoreCompetences = () => {
  const data = [
    {
      icons: (
        <FaHandshakeAngle className="text-[#C87759] group-hover:text-white w-20 h-20" />
      ),
      title: "Strong partnerships with leading fintech and cloud vendors",
    },
    {
      icons: (
        <SiGoogleearthengine className="text-[#C87759] group-hover:text-white w-20 h-20" />
      ),
      title: "Agile software engineering and DevOps",
    },
    {
      icons: (
        <HiOutlineBanknotes className="text-[#C87759] group-hover:text-white w-20 h-20" />
      ),
      title: "Domain expertise in banking and finance",
    },
    {
      icons: (
        <PiCertificateDuotone className="text-[#C87759] group-hover:text-white w-20 h-20" />
      ),
      title: "Certified professionals (PMP, PRINCE2, ISO27001)",
    },
  ];
  return (
    <section className="bg-[#f2f2f2] py-20 px-10 sm:px-14 md:px-20">
      <h1 className="text-4xl font-semibold text-center text-[#C87759]">
        Core Competences
      </h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {data.map((competences) => (
          <li
            key={competences.icon}
            className="shodow bg-white group hover:bg-[#C87759] group-hover:text-white border-t-4 border-[#C87759] group-hover:border-white flex flex-col justify-center items-center p-5 transform group-hover:translate-y-0
              transition duration-3000 ease-in-out hover:scale-[0.98]"
          >
            {competences.icons}
            <div className="text-center pt-10 font-medium group-hover:text-white">
              {competences.title}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
