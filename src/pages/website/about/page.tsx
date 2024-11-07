import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="w-full">
      <img className="w-full" src="/bannerabout.jpg" alt="LongHai" />
      {/*  */}
      <div className="w-[1280px] mx-auto">
        <div className="flex justify-between my-16">
          <div className="w-1/3 items-center text-center mr-8">
            <div className="flex justify-center">
              <img
                className="w-[100px] h-[100px]"
                src="/streamline_target-solid.svg"
                alt=""
              />
            </div>
            <h2 className="my-4 font-bold text-[32px]">OUR MISSION</h2>
            <p className="w-full h-[112px] font-regular text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          {/*  */}

          <div className="w-1/3 items-center text-center ">
            <div className="flex justify-center">
              <img
                className="w-[100px] h-[100px]"
                src="/mdi_highway.svg"
                alt=""
              />
            </div>
            <h2 className="my-4 font-bold text-[32px]">OUR MISSION</h2>
            <p className="w-full h-[112px] font-regular text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          {/*  */}

          <div className="w-1/3 items-center text-center ml-8">
            <div className="flex justify-center">
              <img
                className="w-[100px] h-[100px]"
                src="/lucide_book-heart.svg"
                alt=""
              />
            </div>
            <h2 className="my-4 font-bold text-[32px]">OUR MISSION</h2>
            <p className="w-full h-[112px] font-regular text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>

        {/* cont  */}

        <div className="flex justify-between">
          <div className="w-1/2 mr-8">
            <img src="/hq720.jpg" alt="" />
          </div>
          <div className="w-1/2">
            <h2 className="text-[32px] font-bold my-6">ABOUT FURNIRO COPANY</h2>
            <p className="text-[18px] font-regular my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[18px] font-regular">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex">
          <div className="w-full text-center my-10">
            <h1 className="w-[844px] h-[96px] font-bold text-[32px] text-center mx-auto ">
              WE CREATE NATURAL WOOD FURNITURE AS WELL AS HIGH-QUALITY
            </h1>
          </div>
        </div>

        <div className="flex justify-between mb-16">
          <img className="w-[300px] h-[320px]" src="/P0.jpg" alt="" />
          <img className="w-[300px] h-[320px]" src="/P0.jpg" alt="" />
          <img className="w-[300px] h-[320px]" src="/P0.jpg" alt="" />
          <img className="w-[300px] h-[320px]" src="/P0.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
