import React from "react";
import { GiGiftOfKnowledge } from "react-icons/gi";

const HomeHeading = () => {
  return (
    <div
      data-aos="zoom-out"
      className="bg-[url('/nurulBayan.jpg')] bg-center py-6 min-h-[70vh] md:h-[90vh] relative w-full bg-cover pt-[6rem] md:pt-[12rem] px-3"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-white flex justify-center flex-col items-center leading-10 text-center ">
        <GiGiftOfKnowledge className="text-[4rem]" />
        <p className="md:text-[1.5rem] font-semibold">
          بِـسمِ اللّٰــهِ الرَّحمَــانِ الرَّحِـيــمِ
        </p>
        <p className="md:text-[1.5rem] font-semibold">Welcome to</p>
        <h1
          className="text-[3rem] md:text-[4rem] font-bold shadow-md font-serif"
          style={{ textShadow: "3px 3px 10px skyblue" }}
        >
          MARKAZ NUURIL BAYAN
        </h1>
        <p className="text-[1.2rem] md:text-[1.5rem] font-semibold mt-2 md:mt-6 font-san">
          Nurturing Knowledge & Faith
        </p>
        <p className="w-[90%] text-[0.8rem] md:w-[60%] md:text-[1.2rem] font-mono leading-4 md:leading-6 mt-3">
          We strive for excellence in Islamic education by nurturing students
          through Qur’an study, Arabic language learning, comprehensive Islamic
          studies, and holistic knowledge of Islam in a caring and supportive
          environment.
        </p>
      </div>
    </div>
  );
};

export default HomeHeading;
