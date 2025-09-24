import React from "react";
import { schoolRules } from "../../../Data/schoolRules";

const SchoolRules = () => {
  return (
    <div className="pt-[6rem] md:pt-[8rem] pb-16 px-5">
      <h1 className="text-center text-sky-700 font-serif font-bold md:text-[2.5rem]">
        Guidelines & Regulations
      </h1>
      <ul className="w-[80%] mx-auto bg-white rounded-2xl border border-sky-400 py-5 md:py-9 px-5 md:px-14 list-disc list-inside">
        {schoolRules.map((rule, i) => (
          <li
            key={i}
            className="text-gray-600 font-semibold text-[0.6rem] md:text-[1rem] mb-4 marker:text-sky-600"
          >
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolRules;
