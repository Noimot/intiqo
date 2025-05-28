import React from "react";

const Ceo = () => {
  return (
    <section className="px-10 sm:px-14 md:px-20 lg:px-40 py-20">
      <h3 className="text-4xl font-semibold pb-5 text-[#C87759] text-center">
        Meet The CEO
      </h3>
      <div className="flex flex-col md:flex-row gap-24 mt-12 justify-between">
        <div className="md:w-1/2 leading-8 font-medium text-justify">
          Victor Ajayi is a results-driven IT executive with over 13 years of
          experience at the intersection of technology and business innovation.
          As the current Chief Technology Officer of a leading financial
          institution and a Non-Executive Director within the same group, he
          brings strategic insight and technical leadership that drive digital
          transformation and operational efficiency. His career spans successful
          ventures in fintech and enterprise solutions, with a track record of
          scaling technology for impact and growth. An alumnus of The Federal
          Polytechnic, Ede (OND and HND), and the University of Ibadan (BSc and
          MSc), he is presently advancing his business leadership through an MBA
          at the University of Lagos Business School. His strong academic
          foundation underpins his ability to bridge complex technology with
          real-world business needs. He is the Founder of a Intiqo Technology
          Service Limited and Co-founder of both a tech venture and a financial
          institution—each aimed at delivering innovation-led value in
          underserved markets. With a keen eye for scalable solutions and
          sustainable growth, Victor is well-positioned to lead and collaborate
          on investor-backed ventures seeking long-term returns and market
          disruption.
        </div>
        <div className="md:w-1/2 h-[640px]">
          <div className="w-full h-full">
            <img
              src="/images/intiqo-ceo.jpeg"
              alt=""
              className="w-full h-auto max-w-md mx-auto transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 shadow-md rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
