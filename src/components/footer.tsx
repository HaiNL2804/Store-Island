import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff" }}>
      <footer className="max-w-6xl mx-auto py-10 px-4">
        <div className="flex justify-between">
          <div className="w-1/2">
            <ul className="space-y-6 text-sm">
              <li className="flex justify-between items-center">
                <span>CONTACT</span>
                <span>+</span>
              </li>
              <li className="flex justify-between items-center">
                <span>CLIENT SERVICES</span>
                <span>+</span>
              </li>
              <li className="flex justify-between items-center">
                <span>CORPORATE</span>
                <span>+</span>
              </li>
              <li className="flex justify-between items-center">
                <span>FOLLOW US</span>
                <span>+</span>
              </li>
              <li className="flex justify-between items-center">
                <span>LEGAL</span>
                <span>+</span>
              </li>
            </ul>
            <div className="mt-8">
              <img src="/logo.png" alt="Logo" className="w-20 h-auto" />
            </div>
          </div>

          <div className="w-1/2 pl-16">
            <div className="mb-8">
              <h3 className="font-bold mb-4">NEWSLETTER</h3>
              <label className="block text-sm mb-2">EMAIL ADDRESS*</label>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black border-b border-white text-white p-2 flex-grow outline-none"
                />
                <button className="border border-white px-4 py-2 ml-4 text-xs font-bold hover:bg-white hover:text-black transition duration-200">
                  CONTINUE
                </button>
              </div>
            </div>

            <div className="text-sm space-y-6">
              <div className="flex justify-between items-center">
                <span>SHOP IN: UNITED STATES</span>
                <span>+</span>
              </div>
              <div className="flex justify-between items-center">
                <span>LANGUAGE: ENGLISH</span>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs">
          <p>
            COPYRIGHT © 2024 SPORTSWEAR COMPANY S.P.A. ALL RIGHTS RESERVED. -{" "}
            <Link to="/corporate-info" className="underline">
              CORPORATE INFO
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
