import React from "react";
import { Home, Bed } from "lucide-react";

const LearningOptions = () => {
  const options = [
    {
      title: "Boarding",
      description:
        "Students live within the Madrasah, enjoying full-time Islamic and academic education, with close mentorship and a structured environment.",
      icon: <Bed className="w-10 h-10 text-white" />,
      bg: "from-purple-500 to-indigo-600",
    },
    {
      title: "Day Learning",
      description:
        "Students come daily for classes and return home after studies, balancing Islamic knowledge with their family environment.",
      icon: <Home className="w-10 h-10 text-white" />,
      bg: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section data-aos="fade-up" className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-7 font-serif">
          Boarding & Day Learning
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At{" "}
          <span className="font-semibold text-sky-700">
            MARKAZ NUURIL BAYAN
          </span>
          , we provide flexible learning options to meet the needs of every
          student, whether they stay with us full-time or attend classes daily.
        </p>

        <div className="grid md:grid-cols-2 gap-14 md:gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition border border-sky-200"
            >
              <div
                className={`absolute -top-6 left-6 w-14 h-14 rounded-full bg-gradient-to-r ${option.bg} flex items-center justify-center shadow-md`}
              >
                {option.icon}
              </div>
              <h3 className="text-2xl font-semibold text-sky-700 font-serif mt-6 mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOptions;
