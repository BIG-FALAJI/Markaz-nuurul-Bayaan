import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import { FaStarAndCrescent } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";

const CoursesOffered = () => {
  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 sm:px-8 md:px-12 my-10 md:my-28"
    >
      {/* Qur'an */}
      <div className="flex items-center gap-4 border border-sky-200 px-3 justify-center py-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
        <GiOpenBook className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-sky-500 text-white text-2xl p-2 md:p-3" />
        <p className="flex flex-col items-start text-[0.85rem] md:text-[1rem]">
          <span className="font-serif font-bold">Qur'an</span>
          Memorization
        </p>
      </div>

      {/* Arabic */}
      <div className="flex items-center gap-4 border border-sky-200 px-3 justify-center py-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
        <p className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-sky-500 text-white text-2xl p-2 md:p-3">
          ع
        </p>
        <p className="flex flex-col items-start text-[0.85rem] md:text-[1rem]">
          <span className="font-serif font-bold">Arabic</span>
          Language
        </p>
      </div>

      {/* Islamic Studies */}
      <div className="flex items-center gap-4 border border-sky-200 px-3 justify-center py-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
        <FaStarAndCrescent className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-sky-500 text-white text-2xl p-2 md:p-3" />
        <p className="flex flex-col items-start text-[0.85rem] md:text-[1rem]">
          <span className="font-serif font-bold">Islamic</span>
          Studies
        </p>
      </div>

      {/* Balanced Curriculum */}
      <div className="flex items-center gap-4 border border-sky-200 px-3 justify-center py-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
        <FaBalanceScale className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-sky-500 text-white text-2xl p-2 md:p-3" />
        <p className="flex flex-col items-start text-[0.85rem] md:text-[1rem]">
          <span className="font-serif font-bold">Balanced</span>
          Curriculum
        </p>
      </div>
    </div>
  );
};

export default CoursesOffered;
