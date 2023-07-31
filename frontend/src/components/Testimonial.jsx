import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Cards from "./Cards";
import Card1 from "../img/courses/card11.png";
import Card2 from "../img/courses/card44.jpg";
import Card3 from "../img/courses/card22.png";
import Card4 from "../img/courses/card33.png";
import Card5 from "../img/courses/card55.jpg";

const courses = [
  {
    id: 1,
    name: "Multi-Cloud DevOps Engineer with Generative AI specialization",
    img: Card1,
    link: "/courses/data",
  },
  {
    id: 2,
    name: "Multi-Cloud Data Engineer with Generative AI specialization",
    img: Card3,
    link: "/courses/data",
  },
  {
    id: 3,
    name: "Multi-Cloud Generative AI & LLMs",
    img: Card4,
    link: "/courses/data",
  },
  {
    id: 4,
    name: "Multi-Cloud Security Engineer",
    img: Card2,
    link: "/courses/security",
  },
  {
    id: 5,
    name: "Multi-Cloud Networking Engineer with Generative AI specialization",
    img: Card5,
    link: "/courses/networking",
  },
];

const Testimonial = () => {
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="custom-next-arrow border absolute mx-3 bottom-[-90px] left-2/4"
      onClick={onClick}
    >
      <svg
        className="_ufjrdd"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 48 48"
        role="img"
        aria-labelledby="ChevronRightce54f5ee-0ba3-4b08-e1c0-ac0e9de771c9 ChevronRightce54f5ee-0ba3-4b08-e1c0-ac0e9de771c9Desc"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "rgb(31, 31, 31)", height: "45px", width: "48px" }}
      >
        <polygon
          transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)"
          points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8"
          role="presentation"
        ></polygon>
      </svg>
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="custom-prev-arrow border absolute  mx-3 bottom-[-90px] right-2/4"
      onClick={onClick}
    >
      <svg
        className="_ufjrdd"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 48 48"
        role="img"
        aria-labelledby="ChevronLeft74231b2a-fbbb-4f0d-fb46-32cd31cf7a86 ChevronLeft74231b2a-fbbb-4f0d-fb46-32cd31cf7a86Desc"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "rgb(31, 31, 31)", height: "48px", width: "48px" }}
      >
        <g transform="translate(-362.000000, -1749.000000)" role="presentation">
          <polygon points="376 1773 390.585 1789 391.999 1787.586 378.828 1773 391.999 1758.415 390.585 1757"></polygon>
        </g>
      </svg>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3,
    slidesToScroll: 1,

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2000, // Delay between each slide transition in milliseconds

    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-3 md:p-5 md:my-0 relative" id="home_courses">
      <h2 className="text-xl md:text-[35px] md:font-[600] md:leading-[130%] leading-normal mx-auto text-center  mb-5 uppercase">
        Courses <span className="text-green-600">Offered</span>
      </h2>
      <div className="md:py-5 my-5 flex flex-col justify-center items-center">
        <p className="mb-8 lg:mb-4 text-center text-gray-40 md:text-2xl">
          We are the first in the industry to offer Multi-Cloud engineering
          programs across DevOps, Data, Security, Networking and Generative AI
          courses with hands-on labs and projects.
        </p>
        <p className="w-32 bg-green-500 h-2 text-center"></p>
      </div>
      {/* --------- For Mobile view -------- */}
      <div className="md:hidden">
        <Slider {...settings}>
          {courses.map((content) => (
            <div key={content.id}>
              <Cards name={content.name} img={content.img} id={content.id} />
            </div>
          ))}
        </Slider>
      </div>

      {/* --------- For Desktop view -------- */}
      <div className="hidden md:flex md:flex-wrap ">
        {courses.map((content) => (
          <div key={content.id} className="mt-4 mx-8 p-5">
            <Cards
              name={content.name}
              img={content.img}
              id={content.id}
              link={content.link}
            />
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default Testimonial;
