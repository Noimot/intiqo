import React, { useEffect, useRef } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const RecentWorks = () => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  
  const handleMouseHover = (ref) => {
    ref.current.style.zIndex = 10;
    ref.current.style.BackgroundImage = "#26ade4";
  };
  const handleMouseLeave = (ref) => {
    ref.current.style.zIndex = -1;
  };

  useEffect(() => {
    firstRef.current.style.zIndex = -1;
    secondRef.current.style.zIndex = -1;
    thirdRef.current.style.zIndex = -1;
  });
  const images = [
    {
      image: "/images/primepay.jpeg",
      heading: "PrimePay",
      paragraph: "Redefining Access to Credit and Financing we bring people together and make credit and alternative financing accessible to all",
      refName: firstRef,
      link: "https://www.prime-pay.africa/index.html"
    },
    {
      image: "/images/thembani.jpeg",
      heading: "Thembani",
      paragraph:
        "Promoting Financial Inclusion in Africa Business development company aiming to promote financial inclusion in Africa and bring SMEs into the mainstream economy",
      refName: secondRef,
      link: "https://thembani.netlify.app/login"
    },
    {
      image: "/images/page-fin.jpeg",
      heading: "Page Financials",
      paragraph:
        "We want to be your one-stop-shop when you need urgent cash, extra income or any other financial services",
      refName: thirdRef,
      link: "https://www.prime-pay.africa/index.html"
    },
  ];

  return (
    <section className="p-20">
      <div className="text-center text-[#4e4e4e] space-y-4">
        <h2 className="text-4xl font-semibold text-center">Recent works</h2>
        <p>What we have done so far</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 pt-7">
        {images.map((_images) => (
          <div
            className="h-[300px] relative"
            onMouseEnter={() => handleMouseHover(_images.refName)}
            onMouseLeave={() => handleMouseLeave(_images.refName)}
            key={_images.refName}
            style={{
              backgroundImage: `url(${_images.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "300px",
              width: "100%",
              backgroundSize: "cover",
            }}
          >
            <div
              className="h-[300px] absolute t-0 b-0 l-0 r-0 hover:bg-[#26ade4] w-full px-5 py-6"
              ref={_images.refName}
            >
              <div className="text-white space-y-4">
                <h4 className="text-2xl">{_images.heading}</h4>
                <p className="text-base">{_images.paragraph}</p>
                <div>
                  <a href={_images.link} className="flex items-center gap-x-2" target="_blank" rel="noreferrer">
                    <EyeIcon className="h-5 w-5 text-white" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
