import React from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { SiTheregister } from "react-icons/si";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="relative z-10 ">
        {" "}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 items-center">
            <nav>
              <ul className="flex justify-center space-x-11 text-[16px] font-medium">
                <li>
                  <Link to="/" className="hover:text-red-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-red-500">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-red-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-red-500">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center">
              <Link to="/">
                <img
                  className="w-[81px] h-[108px]"
                  src="/logo.png"
                  alt="Hai Long"
                />
              </Link>
            </div>
            <div className="flex justify-end space-x-4">
              <Link to="/login">
                <div className="flex items-center hover:text-red-500">
                  <AiOutlineUser className="text-[20px] hover:text-red-500" />
                  <p className="text-[16px] font-medium">Login</p>
                </div>
              </Link>

              <Link to="/signup">
                <div className="flex items-center hover:text-red-500">
                  <SiTheregister className="text-[22px] hover:text-red-500" />
                  <p className="text-[16px] font-medium">Register</p>
                </div>
              </Link>
              <Link to="/cart" className="flex items-center">
                <IoCartOutline className="text-[22px] hover:text-red-500" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* 
      <div className="relative">
        <img className="w-full h-auto" src="/banner.webp" alt="Banner" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-sm font-light mb-2 uppercase">
            STONE ISLAND | NEW BALANCE MADE IN UK 991V2 GHOST
          </h2>
          <p className="max-w-xl text-center text-xs font-light mb-4">
            The new design, which draws from camouflage-inspired Stone Island
            Ghost pieces and features premium materials in the line’s signature
            monochromatic palette, is now available to registered users who
            signed up for the sale before 10 am CET on September 20.
          </p>
          <Link
            to="/shop"
            className="border border-white py-2 px-6 hover:bg-white hover:text-black transition duration-200"
          >
            Shop Now
          </Link>
        </div>
      </div> */}
    </>
  );
}

export default Header;
