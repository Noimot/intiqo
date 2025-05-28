import React from "react";

const AboutUs = () => {
  return (
    <section className="px-10 sm:px-14 md:px-20 lg:px-40 py-20" id="about">
      <h1 className="text-4xl  font-bold text-center">
        About Us
      </h1>
      <div className="flex flex-col gap-x-16 items-start pt-10">
        <div className="flex items-center justify-center flex-col space-y-8">
          <p>
            Intiqo Technology Service Limited. is a leading technology company
            delivering innovative software development, IT consultancy, and core
            banking deployment services. Our mission is to build secure,
            scalable, and efficient digital ecosystems for financial
            institutions, fintechs, and enterprises.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-24 items-start mt-14">
          <div className="flex items-center justify-center flex-col flex-[50%]">
            <span className="inline-block w-72 h-28">
              <img
                src="https://www.kdevs.com.ng/images/mission.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            <p className="text-justify">
              To become Africa’s most trusted technology partner for digital
              banking and enterprise innovation.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col flex-[50%]">
            <span className="inline-block w-72 h-28">
              <img
                src="https://www.kdevs.com.ng/images/vision.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
            <p className="text-justify">
              To deliver impactful technology solutions that drive operational
              excellence and financial inclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
