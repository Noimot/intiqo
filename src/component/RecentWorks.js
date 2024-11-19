import React, { useEffect, useRef } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";

const RecentWorks = () => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const forthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();
  const seventhRef = useRef();
  const eighthRef = useRef();
  const ninthRef = useRef();

  const handleMouseHover = (ref) => {
    ref.current.style.zIndex = 999;
    ref.current.style.BackgroundImage = "#26ade4";
  };
  const handleMouseLeave = (ref) => {
    ref.current.style.zIndex = -1;
  };

  useEffect(() => {
    firstRef.current.style.zIndex = -1;
    secondRef.current.style.zIndex = -1;
    thirdRef.current.style.zIndex = -1;
    forthRef.current.style.zIndex = -1;
    fifthRef.current.style.zIndex = -1;
    sixthRef.current.style.zIndex = -1;
    seventhRef.current.style.zIndex = -1;
    eighthRef.current.style.zIndex = -1;
    ninthRef.current.style.zIndex = -1;
  });
  const images = [
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item9.jpg",
      heading: "Educational Software",
      paragraph: "We are co-hired to develop a robust educational software",
      refName: firstRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item10.jpg",
      heading: "Financial Application",
      paragraph:
        "We have versatile experience in FinTech app. We have been co-hired to develop such a wonderful app",
      refName: secondRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item11.jpg",
      heading: "Payment Gateway",
      paragraph:
        "Another FinTech application that we have been co-hired to work on",
      refName: thirdRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item1.png",
      heading: "Hilltrusttop Foundation",
      paragraph: "This is an NGO that serves the need to help youth in society",
      refName: forthRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item2.png",
      heading: "Efiwe Inc",
      paragraph:
        "We voluntarily co-worked with Efiwe to deliver their NGO organization website",
      refName: fifthRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item3.png",
      heading: "Computer Based Test",
      paragraph:
        "Developed to prevent examination malpractice and ease students and staff on their worries",
      refName: sixthRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item4.png",
      heading: "Screening Manager",
      paragraph: "This is developed to ease screening process in institutions",
      refName: seventhRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item5.png",
      heading: "Student Information Management System",
      paragraph:
        "A complete Education Management System for tertiary institutions",
      refName: eighthRef,
    },
    {
      image: "https://www.kdevs.com.ng/images/portfolio/recent/item6.png",
      heading: "Question Bank System",
      paragraph:
        "A complete education training and practising system for high school students",
      refName: ninthRef,
    },
  ];

  return (
    <section className="p-20">
      <div className="text-center text-[#4e4e4e] space-y-4">
        <h2 className="text-4xl font-semibold text-center">Recent works</h2>
        <p>What we have done so far</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-7">
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
                  <a href="/" className="flex items-center gap-x-2">
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
