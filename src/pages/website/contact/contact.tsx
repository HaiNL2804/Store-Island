import React from "react";
import { AiFillTikTok, AiFillTwitterSquare } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GiPositionMarker } from "react-icons/gi";
import { GrSend } from "react-icons/gr";
import { IoMdPaperPlane } from "react-icons/io";

const ContactPage = () => {
  return (
    <div>
      <div className="w-full">
        <img className="w-full" src="/bannercontact.jpg" alt="" />
      </div>
      {/* thong tin lien lac  */}
      <section>
        <div className="w-[1280px] mx-auto flex justify-between mt-16 leading-10">
          <div className="flex ">
            <div className="flex justify-center border border-[#CA8A04] w-[64px] h-[64px]">
              <img className="w-[40px] h[-40px]" src="/imgaddress.svg" alt="" />
            </div>
            <div className=" mt-2 ml-4 ">
              <h2 className="font-bold text-[24px]">ADDRESS</h2>
              <h5 className="w-[317px] h-[56px] text-[#71717A]">
                60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
              </h5>
            </div>
          </div>
          <div className="flex ">
            <div className="flex justify-center border border-[#CA8A04] w-[64px] h-[64px]">
              <img className="w-[40px] h[-40px]" src="/imgaddress.svg" alt="" />
            </div>
            <div className=" mt-2 ml-4 ">
              <h2 className="font-bold text-[24px]">CONTACT DETAILS</h2>
              <h5 className="w-[317px] h-[28px] text-[#71717A]">
                info@furniro.com
              </h5>
              <h5 className="w-[184px] h-[29px] text-[#71717A]">02056278686</h5>
            </div>
          </div>
          <div className="flex ">
            <div className="flex justify-center border border-[#CA8A04] w-[64px] h-[64px]">
              <img className="w-[40px] h[-40px]" src="/imgaddress.svg" alt="" />
            </div>
            <div className=" mt-2 ml-4 ">
              <h2 className="font-bold text-[24px]">SOCIAL NETWORKS</h2>
              <h5 className="flex w-[317px] h-[56px] text-[#71717A] mt-4">
                <FaFacebookSquare className="text-3xl" />
                <FaInstagram className="text-3xl ml-2" />
                <AiFillTikTok className="text-3xl ml-2" />
                <AiFillTwitterSquare className="text-3xl ml-2" />
                <FaYoutubeSquare className="text-3xl ml-2" />
              </h5>
            </div>
          </div>
        </div>
        {/* contact  */}
        <div className="w-full flex justify- mt-20">
          <div className="w-1/2 ">
            <img className="w-full h-full" src="/hq720.jpg" alt="" />
          </div>
          <div className="flex justify-center items-center w-1/2">
            <div className="w-full p-8">
              <h2 className="font-semibold text-[20px]">CONTACT</h2>
              <h1 className="font-bold text-[40px]">CONNECT WITH US NOW</h1>

              <div className="mr-20 grid grid-cols-2 my-8 ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b-2 mr-8 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-red-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b-2 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-red-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-b-2 mr-8 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-red-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-b-2 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-red-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="border-b-2 col-span-2 border-[#9CA3AF] py-3 bg-transparent placeholder:text-[#9CA3AF] focus:border-red-500 outline-none"
                />
              </div>
              <button className="mt-8">
                <div className="flex justify-center items-center bg-[#CA8A04] w-[200px] h-[43px] ">
                  {/* <BsFillSendFill className="text-2xl text-[#fff]" /> */}
                  <IoMdPaperPlane className="text-2xl text-[#fff]" />

                  <h3 className="text-[#fff] font-bold text-[16px] ml-2">
                    Send Information
                  </h3>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
