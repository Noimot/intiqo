import React from "react";
import ImageCard from "./ImageCard";

const OurTeam = () => {
  return (
    <section className="bg-[#f2f2f2] p-20">
      <div className="text-center text-[#4e4e4e]">
        <h1 className="text-4xl font-semibold text-center">Our Team</h1>
        <p className="py-5">
          We have a team of expertise with versatile experience in information
          and technology.
          <br /> We grow with zeal and passion for development in our heart.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </section>
  );
};

export default OurTeam;
