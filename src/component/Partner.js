import React from "react";

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
      link: "",
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
    <section className="bg-[#4e4e4e] p-20">
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
      <div className="grid grid-cols-4 gap-6">
        {partners.map((partner) => {
          return (
            <a href={partner.link} target="_blank" rel="noreferrer">
              <img src={partner.src} className="h-full w-full object-contain" alt={partner.alt} />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
