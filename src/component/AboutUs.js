import React from "react";

const AboutUs = () => {
  return (
    <section className="px-10 sm:px-14 md:px-20 py-20" id="about">
      <h1 className="text-4xl text-[#4e4e4e] font-semibold text-center">
        About Us
      </h1>
      <div className="flex flex-col gap-x-16 items-start pt-10">
        <div className="flex items-center justify-center flex-col">
          <p className="text-justify leading-8">
            Welcome to Miatech, where innovation meets expertise in software
            development. we are passionate about crafting innovative and
            scalable software solutions that empower businesses to thrive in a
            digital-first world. Founded with the vision to transform complex
            challenges into seamless experiences, our team of dedicated
            developers, designers, and strategists delivers cutting-edge
            technology tailored to your needs. We specialize in end-to-end
            software development, from ideation to deployment, focusing on
            creating robust, user-friendly, and future-proof solutions. Our
            expertise spans web and mobile applications, backend systems, cloud
            integrations, and more. With a commitment to excellence, agility,
            and collaboration, we build lasting partnerships with our clients,
            driving success through technology. Whether you're a startup looking
            to launch your next big idea or an enterprise aiming to modernize
            your systems, we're here to make it happen. Let’s build the future,
            together.
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
              To empower businesses with technology that drives innovation,
              efficiency, and growth. At Miatech, we aim to be more than just a
              service provider; we strive to be your technology partner in
              success.
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
              To become a global leader in software development by continuously
              delivering innovative, user-centric, and impactful solutions that
              shape the future of businesses and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
