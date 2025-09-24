import React, { useState } from "react";
// import mudeer from "../../../assets/Mudeer_MarkazNuurulBayaan.jpg";
import mudeer from "../../../assets/Mudeer.jpg";

const Propietor = () => {
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeMore() {
    setSeeMore(!seeMore);
  }

  const text =
    "Sheikh Ibrahim Abdulrazaq Onimajesin Alkhaleely, popularly known as Alfa-nla, is a respected Islamic scholar and preacher from Lagos, Nigeria. He is widely recognized for his Quranic teachings, religious lectures, and public sermons that promote Islamic knowledge and moral values. Sheikh Onimajesin has dedicated his life to spreading the message of Islam through community programs, gatherings, and online platforms, especially among Yoruba-speaking Muslims. Known for his eloquence and deep understanding of Islamic scholarship, he continues to inspire many through his guidance and leadership within the Muslim community.";

  return (
    <div data-aos="fade-up" className="py-10">
      <h1 className="font-semibold mx-auto px-3 md:text-[2rem] border-b-4 border-sky-500 w-fit">
        MUDEER (Propietor)
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-8 px-4 md:px-24">
        {/* Image + caption */}
        <div className="basis-full md:basis-[40%] flex flex-col items-center">
          <img
            className="w-full max-w-[200px] md:max-w-[300px] border-2 md:border-4 rounded-2xl border-sky-400 shadow-md"
            src={mudeer}
            alt="Mudeer Sheikh Ibrahim Abdulrazaq Onimajesin"
          />
          <p className="text-center text-sm md:text-base mt-2 font-medium">
            Mudeer Sheikh Ibrahim Abdulrazaq Onimajesin
          </p>
        </div>

        {/* Mobile text with see more */}
        <p className="block md:hidden text-sm bg-white p-4 border-2 border-sky-500 rounded-2xl shadow-sm hover:shadow-md transition">
          {seeMore ? text : `${text.slice(0, 200)}... `}
          <span
            onClick={handleSeeMore}
            className="cursor-pointer text-sky-500 font-semibold ml-2"
          >
            {seeMore ? "See less" : "See more"}
          </span>
        </p>

        {/* Desktop text */}
        <p className="hidden md:block md:basis-[60%] lg:basis-[50%] text-center bg-white p-6 shadow-sm hover:shadow-md transition border-2 border-sky-500 rounded-2xl text-[0.95rem] leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Propietor;
