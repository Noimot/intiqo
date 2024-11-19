import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const ImageSlider = () => {
//   const [openImageModal, setOpenImageModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide(next),
    // nextArrow: openImageModal ? undefined : (
    //   <div>
    //     <ChevronRightIcon className="h-5 w-5" />
    //   </div>
    // ),
    // prevArrow: openImageModal ? undefined : (
    //   <div>
    //     <ChevronLeftIcon className="h-5 w-5" />
    //   </div>
    // ),
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex", gap: "10px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
    <div
    className={`w-4 h-4 rounded-full ${
      i === activeSlide ? "bg-white" : "bg-[#26ade4]"
    }`}
  ></div>
    ),
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div
          className="w-full h-[calc(100vh-200px)] relative"
          style={{
            backgroundImage:
              "url('https://www.kdevs.com.ng/images/portfolio/recent/item2.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            display: "block",
          }}
        >
          <img
            src="https://www.kdevs.com.ng/images/portfolio/recent/item2.png"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex left-32 items-center w-full h-full text-white bottom-20 text-left font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/4 space-y-10">
              <p className="scroll-up-text">
                We make sure all tasks are dully attended to and contract period
                is highly maintained.
              </p>
              <p className="scroll-up-text">
                Our clients always want more from us. we are good and fast in
                delivery..
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[calc(100vh-200px)] relative "
          style={{
            backgroundImage:
              "url('https://www.kdevs.com.ng/images/portfolio/recent/item11.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            display: "block",
          }}
        >
          <img
            src="https://www.kdevs.com.ng/images/portfolio/recent/item11.jpg"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex left-32 items-center w-full h-full text-white bottom-20 text-left font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/4 space-y-10">
              <p className="scroll-up-text">
                We make sure services are reported in the best way our clients
                can understand.
              </p>
              <p className="scroll-up-text">
                We are always at the edge in getting the best for our clients..
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[calc(100vh-200px)] relative"
          style={{
            backgroundImage:
              "url('https://www.kdevs.com.ng/images/portfolio/recent/item2.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            display: "block",
          }}
        >
          <img
            src="https://www.kdevs.com.ng/images/portfolio/recent/item2.png"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex left-32 items-center w-full h-full text-white bottom-20 text-left font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/4 space-y-10">
              <p className="scroll-up-text">
                We are team of experienced experts around the world.
              </p>
              <p className="scroll-up-text">
                We provide our work with highest level of professionalism and we
                take careful measures.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[calc(100vh-200px)] relative"
          style={{
            backgroundImage:
              "url('https://www.kdevs.com.ng/images/portfolio/recent/item2.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            display: "block",
          }}
        >
          <img
            src="https://www.kdevs.com.ng/images/portfolio/recent/item5.png"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex left-32 items-center w-full h-full text-white bottom-20 text-left font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/4 space-y-10">
              <p className="scroll-up-text">
                We always have our clients at heart.
              </p>
              <p className="scroll-up-text">
                We build with purpose to keep our values.{" "}
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
