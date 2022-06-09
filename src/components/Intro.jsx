import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div
      name="home"
      className="h-auto w-full pt-32 bg-gradient-to-b from-black via-black to-gray-800 md:h-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Full Stack Java Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I started my self-taught journey as a software developer in July,
            2021, and landed my first role with GenSpark in April, 2022. I have
            a passion for learning new technologies and I am always looking to
            learn more.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="w-0 rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
