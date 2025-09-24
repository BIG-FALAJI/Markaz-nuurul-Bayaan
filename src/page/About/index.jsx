import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GiStripedSun } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import SchoolRules from "./SchoolRules";
import LearningOptions from "../Home/LearningOption";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      className="pt-[6rem] md:pt-[8rem] pb-16 px-5 bg-gradient-to-b from-sky-50 to-sky-100"
    >
      <div>
        <h1 className="text-center text-sky-700 font-serif font-bold md:text-[2.5rem]">
          About MARKAZ NUURIL BAYAN
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
          A beacon of Islamic education, dedicated to nurturing young minds with
          authentic Islamic knowledge and values.
        </p>
      </div>

      {/* History, mission, vission */}
      <div className="my-16">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 ">
          <li className="flex flex-col items-center gap-4 bg-white border border-sky-400 text-center px-4 py-6 rounded-2xl ">
            <GoBook className="text-[4rem] text-white bg-sky-500 p-2 rounded-full " />
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Our History
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              Established with the vision to provide authentic Islamic
              education,{" "}
              <span className="font-semibold text-sky-700">
                MARKAZ NUURIL BAYAN
              </span>{" "}
              has been serving the community for years, building strong
              foundations of faith and knowledge and also blending students to
              be among the best.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 bg-white border border-sky-400 text-center px-4 py-6 rounded-2xl ">
            <GiStripedSun className="text-[4rem] text-white bg-sky-500 p-2 rounded-full " />
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Our Mission
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              To provide comprehensive Islamic education that combines
              traditional Islamic teachings with modern educational methods,
              fostering both spiritual and intellectual growth.
            </p>
          </li>
          <li className="flex flex-col items-center gap-6 bg-white border border-sky-400 text-center px-4 py-6 rounded-2xl ">
            <FaRegHeart className="text-[4rem] text-white bg-sky-500 p-2 rounded-full " />
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Our Vision
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              To be a leading center of Islamic learning that produces
              knowledgeable, righteous, and productive members of society who
              contribute positively to their communities.
            </p>
          </li>
        </ul>
      </div>

      {/* Why Choose MARKAZ NUURIL BAYAN? */}
      <div className="w-[80%] mx-auto bg-white rounded-2xl border border-sky-400 py-9 ">
        <h1 className="text-center text-sky-700 mb-7 font-serif font-bold md:text-[1.4rem] px-6 md:px-10 ">
          Why Choose MARKAZ NUURIL BAYAN?
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-6 md:px-10">
          <li className=" ">
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Authentic Islamic Curriculum
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              Our curriculum is based on authentic Islamic sources, ensuring
              students receive proper religious education according to the Quran
              and Sunnah.
            </p>
          </li>
          <li className=" ">
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Nurturing Environment
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              We provide a supportive and encouraging environment where students
              can learn and grow academically.
            </p>
          </li>
          <li className=" ">
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Qualified Instructors
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              Our teachers are well-versed in Islamic sciences and Arabic
              language, providing quality education with patience and care.
            </p>
          </li>
          <li className=" ">
            <h1 className="font-semibold font-serif text-[0.9rem] md:text-[1.1rem] text-sky-700">
              Community Focus
            </h1>
            <p className="text-gray-600 text-[0.7rem] md:text-[1rem]">
              Building strong connections within the Muslim community and
              promoting Islamic values in daily life.
            </p>
          </li>
        </ul>
      </div>
      <LearningOptions />
      <SchoolRules />
    </div>
  );
};

export default About;
