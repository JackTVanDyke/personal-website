import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full py-32 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! My name is Jack VanDyke and I am a Full Stack Java Developer
          utilizing Java, Hibernate, MySQL, Spring Boot, React, and AWS to
          create web applications. I enjoy the idea of working on web
          applications that thousands of people use every day in order to make
          them easier and more enjoyable to use. Outside of work, I am a very
          active individual. Playing basketball and going to the gym are two of
          my favorite activities. In the gym, I am constantly setting goals and
          working to achieve them. A current goal of mine is to bench 405 pounds
          and I'm slowly progressing towards that number. I did have goal
          numbers for bench and deadlift, but recently tore my patellar tendon
          so had to change my focus. I am also a huge fan of the Cleveland
          Cavaliers and catch games when I can in Cleveland. Gaming is also a
          hobby of mine as it is a wonderful competitive outlet. Cats are my
          favorite animal and I hope to own two in the near future. When I can,
          I absolutely love going to the beach. I'm hoping to turn it into a
          more frequent thing! If you have an opportunity for me to improve my
          skills and work on something new, please reach out.
        </p>
      </div>
    </div>
  );
};

export default About;
