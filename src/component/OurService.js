import React from "react";
import Card from "./Card";

const OurService = () => {
  const services = [
    {
      image: "https://www.kdevs.com.ng/images/services/services2.png",
      title: "Software Development",
      list: [
        "Custom-built enterprise applications",
        "Web and mobile app development",
        "Cloud-native architecture and APIs",
        "Agile and DevOps delivery models",
      ],
    },
    {
      image: "/project-management.webp",
      title: "IT Consultancy",
      list: [
        "Digital transformation strategy",
        "Project management and system integration",
        "Risk, audit, and IT governance consulting",
        "Compliance and cybersecurity advisory",
      ],
    },
    {
      image: "/core-banking.jpg",
      title: " Core Banking Deployment",
      list: [
        "Deployment of custom-built CBA",
        "Core-to-channel integrations and customizations",
        "Data migration and regulatory compliance",
        "User training and 24/7 support services",
      ],
    },
  ];
  return (
    <section
      className="bg-[#4e4e4e] py-20 px-10 sm:px-14 md:px-20"
      id="services"
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-semibold text-center text-[#C87759]">Our Service</h1>
        <p className="py-7 text-[#C87759]/80">
          We render amazing services. <br />
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <React.Fragment key={service.title}>
            <Card
              title={service.title}
              list={service.list}
              image={service.image}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OurService;
