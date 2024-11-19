import React from "react";

const AboutUs = () => {
  return (
    <section>
      <h1 className="text-4xl text-[#4e4e4e;] font-semibold text-center">About Us</h1>
      <div className="flex p-20 gap-x-16 items-start">
        <div className="flex items-center justify-center flex-col">
          <span className="inline-block w-64 h-48">
            <img
              src="https://www.kdevs.com.ng/images/software.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </span>
          <p className="text-justify mt-7">
            Information and Communication Technology has been one of the most
            prolific and ever flourishing sector in the universe in which our
            organization (K-Devs) co-existed in the field in the year 2014 and
            our major work areas span through information and communication
            technology services (hardware and software), consultancy services,
            manpower support services, and this wonderful company is managed by
            Mr. K.B. Olanipekun.
          </p>
        </div>
        <div className="space-y-7">
          <div className="flex items-center justify-center flex-col">
            <span className="inline-block w-72 h-28">
              <img src="https://www.kdevs.com.ng/images/mission.png" alt="" className="w-full h-full object-cover"/>
            </span>
            <p className="text-justify">
              To provide exceptional services to the information and
              communication industries and committed to providing the highest
              level of professionalism, service response, and quality
              workmanship, also to deliver high-quality, cost-effective projects
              on schedule by employing and supporting motivated, flexible, and
              focused teams.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <span className="inline-block w-72 h-28">
              <img src="https://www.kdevs.com.ng/images/vision.png" alt="" className="w-full h-full object-contain"/>
            </span>
            <p className="text-justify">
              To build and develop an extremely focused, result-oriented,
              motivated and professionally trained work force which will
              translate clients' vision into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
