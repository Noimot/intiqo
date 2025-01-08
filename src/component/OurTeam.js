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
        linkedln: "https://www.linkedin.com/in/ismail-oguntoyinbo-904aaa80/",
      },
      info: "An accomplished and visionary engineering leader with a strong technical background and an unwavering passion for driving business growth through technology. Excels in aligning engineering strategies with organizational goals, fostering innovation, and building high-performing, collaborative teams. Oguntoyinbo Ismail ola is a graduate of University of Ibadan, Ibadan, Oyo state, Nigeria, he holds a Bachelor of Science (BSc.) Degree in Computer Science",
      image: "/images/ismail.jpeg",
    },
    {
      name: "Victor Olalekan Ajayi",
      role: "Head of IT & Innovations",
      skills: [],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "https://www.linkedin.com/in/victorajayi-lordbishop/",
      },
      info: "Dedicated IT manager. With a solid background in financial applications, network administration, cybersecurity and project management.Victor, Ajayi is a graduate of University of Ibadan, Ibadan, Oyo state, Nigeria; he holds Master’s Degree in Computer Science,",
      image: "/images/victor.jpeg",
    },
    {
      name: "Alase Sodiq",
      role: "Senior Frontend Engineer",
      skills: ["React", "Next", "Vue", "TypeScript"],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "https://www.linkedin.com/in/sodiqalase/",
      },
      info: "",
      image: "/images/sodiq.jpeg",
    },
    {
      name: "Damilola  Ogunsanya",
      role: "Head of Product Designs",
      skills: [],
      social_media: {
        twitter: "",
        facebook: "",
        linkedln: "https://www.linkedin.com/in/ogunsanya-damilola/",
      },
      info: "An advocate for good UX and Customer focused usable product that provides the best experience. Ogunsanya, Damilola is a graduate of Yaba College of Technology, Yaba, Lagos, Nigeria; he holds Higher National Diploma, Graphic Design. Dami has vast knowledge in user experience. He's highly skilled in graphics design, backed with good teamwork.",
      image: "/images/damilola.jpeg",
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
      image: "/images/noimot.jpeg",
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
        {teamDetails.map((details) => (
          <React.Fragment key={details.name}>
            <ImageCard teamDetails={details} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
