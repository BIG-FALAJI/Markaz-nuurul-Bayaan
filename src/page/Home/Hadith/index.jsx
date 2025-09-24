import React from "react";

const Hadith = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-[url('/BgForHadith.jpg')] bg-cover bg-center h-fit py-8 px-5 md:px-10 flex justify-center items-center my-10 border border-sky-400 w-fit mx-auto rounded-3xl shadow-sm hover:shadow-md transition"
    >
      <div className="text-center leading-[2rem] md:leading-[4rem]">
        <h1 className="font-serif text-[0.7rem] md-text-[1rem]">
          The Prophet ﷺ said:
        </h1>
        <p className="font-bold md:text-[2rem] font-serif">
          طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
        </p>
        <p className=" font-serif font-light md:text-[1.5rem]">
          Seeking knowledge is an obligation upon every Muslim.
        </p>
      </div>
    </div>
  );
};

export default Hadith;
