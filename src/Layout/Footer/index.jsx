import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import { allPaths } from "../../Route/paths";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-sky-500 text-white">
      {/* Main container */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-5 md:justify-between items-start px-4 md:px-16 py-10 border-t border-sky-950">
        {/* Section 1 - About */}
        <div className="basis-full md:basis-1/2">
          <h1 className="font-bold text-sm md:text-2xl mb-2 md:mb-3">
            MARKAZ NUURUL BAYAN
          </h1>
          <p className="text-xs md:text-base leading-relaxed">
            Nurturing Knowledge & Faith through authentic Islamic education. We
            are committed to providing excellence in Quranic studies, Arabic
            language, and comprehensive Islamic education in a modern learning
            environment.
          </p>
        </div>

        {/* Section 2 - Quick Links */}
        <div className="basis-1/2 md:basis-1/4">
          <h1 className="font-bold text-sm md:text-xl mb-3">Quick Links</h1>
          <ul className="space-y-1 text-xs md:text-base">
            <li>
              <Link to={allPaths.home}>Home</Link>
            </li>
            <li>
              <Link to={allPaths.gallery}>Gallery</Link>
            </li>
            <li>
              <Link to={allPaths.about}>About us</Link>
            </li>
            <li>
              <Link to={allPaths.contact}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Section 3 - Contact Info */}
        <div className="basis-1/2 md:basis-1/4">
          <h1 className="font-bold text-sm md:text-xl mb-3">Contact Info</h1>
          <p className="flex items-start gap-2 text-xs md:text-base">
            <IoLocationOutline className="mt-1 shrink-0" />
            <span>
              47 Isiba Oluwo Street, Egbeda Akowonjo, Lagos State, Nigeria.
            </span>
          </p>
          <p className="flex items-start gap-2 text-xs md:text-base mt-2">
            <BsTelephone className="mt-1 shrink-0" />
            <span>+234-806-669-8202</span>
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mx-auto border-t border-white py-2 md:py-4 w-[95%] text-xs md:text-base">
        <h1 className="text-center">
          &copy; 2025 MARKAZ NUURUL BAYAN. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
