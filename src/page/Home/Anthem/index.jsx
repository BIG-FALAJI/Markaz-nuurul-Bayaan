import React from "react";
import anthems from "@/Data/anthems";

const Anthem = () => {
  return (
    <div data-aos="fade-up" className="px-4 md:px-12 py-10">
      <h1 className="text-center text-[1.3rem] md:text-3xl font-bold text-sky-700 mb-8">
        أَنَاشِيدُ المَركَز (School Anthems )
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {anthems.map((anthem, id) => (
          <div
            key={id}
            className="bg-white font-bold shadow-sm border border-sky-200 rounded-xl p-5 md:p-6 flex flex-col gap-2 hover:shadow-md transition"
          >
            {anthem.lines.map((line, lineId) => (
              <p
                key={lineId}
                className=" font-serif text-[0.9rem] md:text-[1.1rem] leading-relaxed text-gray-800 text-center"
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anthem;
