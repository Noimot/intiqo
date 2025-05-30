import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <ChevronRightIcon
      className="absolute w-16 h-16 z-[10] cursor-pointer top-[50%] right-[3%] translate-y-[-50%] rotate-180 text-[#C87759]"
      onClick={onClick}
    />
  );
};
export const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <ChevronLeftIcon
      className="absolute w-16 h-16 z-[10] cursor-pointer top-[50%] left-[3%] translate-y-[-50%] rotate-180 text-[#C87759]"
      onClick={onClick}
    />
  );
};

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
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
        className={`w-6 h-6 rounded-full flex justify-center items-center flex-col ${
          i === activeSlide ? "border border-[#C87759]" : ""
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            i === activeSlide ? "bg-[#C87759]" : "bg-white"
          }`}
        ></div>
      </div>
    ),
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div className="w-full h-[calc(100vh-200px)] relative">
          <img
            src="/images/miatech-images1.jpg"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex bg-gray-900 bg-opacity-70 items-center text-center justify-center w-full h-full text-white bottom-0  font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/2 space-y-10">
              <h3 className="text-5xl font-bold">
                INTIQO TECHNOLOGY SERVICE LIMITED
              </h3>
              <p className="text-2xl leading-10">
                EMPOWERING FINANCIAL TRANSFORMATION THROUGH TECHNOLOGY
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-200px)] relative ">
          <img
            src="/images/miatech-img.jpg"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex bg-gray-900 bg-opacity-70 items-center text-center justify-center w-full h-full text-white bottom-0 font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/2  space-y-10">
              <h2 className="text-5xl font-bold">Innovative Technology:</h2>
              <p className="text-2xl leading-10">
                We stay up-to-date with the latest technology trends and offer
                innovative solutions that help you stay ahead of the competition
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-200px)] relative">
          <img
            src="/images/miatech-img1.jpg"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex bg-gray-900 bg-opacity-70 items-center text-center justify-center w-full h-full text-white bottom-0 font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/2  space-y-10">
              <h2 className="text-5xl font-bold">Scalability:</h2>
              <p className="text-2xl leading-10">
                Our solutions are scalable and can grow with your business
                ensuring that you get the most value out of your investment
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-200px)] relative">
          <img
            src="/images/miatech-image3.jpg"
            className="w-full object-cover h-full"
            alt=""
          />
          <div className="absolute flex bg-gray-900 bg-opacity-70 items-center text-center justify-center w-full h-full text-white bottom-0 font-semibold text-2xl leading-10 animate-fade-in">
            <div className="w-1/2  space-y-10">
              <h2 className="text-5xl font-bold">Industry Expertise:</h2>
              <p className="text-2xl leading-10">
                We specialize in serving specific industries such as banking,
                finance, and offer tailored solutions that meet your unique
                needs.{" "}
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;

export const PartnersSlider = ({ images, imgText }) => {
  const partnerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Slider {...partnerSettings}>
      {imgText
        ? images.map((image, index) => (
            <div key={image.link + index} className="">
              <span >{image.src}</span>
              <p className="text-white font-medium text-lg pt-5">{image.alt}</p>
            </div>
          ))
        : images.map((image, index) => (
            <a
              href={image.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-[2/3] h-16"
              key={image.link + index}
            >
              <img
                src={image.src}
                className="w-full h-full object-contain"
                alt={image.alt}
              />
            </a>
          ))}
    </Slider>
  );
};
