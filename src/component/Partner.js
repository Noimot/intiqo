import React from "react";
import { PartnersSlider } from "./Slider";

const Partners = () => {
  const partners = [
    {
      link: "",
      src: "/images/img.jpeg",
      alt: 'Fair Money'
    },
    {
      link: "",
      src: "/images/img1.jpeg",
      alt: 'Zitra'
    },
    {
      link: "https://pagefinancials.com/",
      src: "/images/img2.jpeg",
      alt: 'Page'
    },
    {
      link: "https://thembani.netlify.app/login",
      src: "/images/img4.jpeg",
      alt: 'Thembani'
    },
  ];
  return (
    <section className="bg-[#4e4e4e] py-20 px-10 sm:px-14 md:px-20 lg:px-40" id="partners">
      <div className="text-center text-white">
        <h1 className="text-4xl font-semibold text-center">Our Partners</h1>
        <p className="py-7">
          We have shown good ethics with our partners and we always make sure
          our partners never find fault with us and we also set in place a
          standardize rules and regulation for our workers in order to relate
          ideally with our partners at all time. We have been known within and
          outside Nigeria for good business relations and we believe people
          comes first in what we do.
        </p>
      </div>
      <div className="mt-10">
        <PartnersSlider images={partners}/>
      </div>
    </section>
  );
};

export default Partners;
