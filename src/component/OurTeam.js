import React from "react";
import ImageCard from "./ImageCard";

const OurTeam = () => {
  const teamDetails = [
    {
      name: "Oguntoyinbo Ismail Ola",
      role: "Head of Engineering",
      skills: [],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "",
      },
      info: "",
      image: ""
    },
    {
      name: "Victor Olalekan Ajayi",
      role: "Head of IT & Innovations",
      skills: [],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "",
      },
      info: "",
      image: ""
    },
    {
      name: "Alase Sodiq",
      role: "Senior Frontend Engineer",
      skills: [],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "",
      },
      info: "",
      image: ""
    },
    {
      name: "Damilola  Ogunsanya",
      role: "Head of Product Designs",
      skills: [],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "",
      },
      info: "",
      image: ""
    },
    {
      name: "Noimot Alabi",
      role: "Frontend Engineer",
      skills: ["HTML", "CSS", "tailwindCSS", "Javascript", "React"],
      social_media: {
        twitter: "https://x.com/adooniade",
        facebook: "https://web.facebook.com/alabi.noimot",
        linkedln: "https://www.linkedin.com/in/noimot-alabi/",
      },
      info: "Experienced frontend developer with 3+ years in crafting dynamic interfaces for various applications, including real estate, logistics, e-commerce, and finance. Proficient in HTML, CSS, JavaScript, React, Next.js, Nuxt.js, Tailwind CSS, Nodejs and TypeScript. ",
      image: "/images/noimot.jpeg"
    },
  ];
  return (
    <section className="bg-[#f2f2f2] py-20 px-10 sm:px-14 md:px-20">
      <div className="text-center text-[#4e4e4e]">
        <h1 className="text-4xl font-semibold text-center">Our Team</h1>
        <p className="py-5">
          We have a team of expertise with versatile experience in information
          and technology.
          <br /> We grow with zeal and passion for development in our heart.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {teamDetails.map((details) => <ImageCard teamDetails={details}/>)}
      </div>
    </section>
  );
};

export default OurTeam;
