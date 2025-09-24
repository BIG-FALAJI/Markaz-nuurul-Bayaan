import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div
      data-aos="fade-up"
      className="pt-[6rem] md:pt-[8rem] pb-20 px-5 bg-gradient-to-b from-sky-50 to-sky-100"
    >
      <h1 className="text-center font-serif font-bold text-3xl md:text-4xl text-sky-800 mb-3">
        Get In Touch
      </h1>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
        Ready to begin your Islamic learning journey? Contact us today for
        enrollment details, campus visits, or any questions about our programs.
      </p>

      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto bg-white shadow-lg rounded-2xl border border-sky-300 py-10 px-6 md:px-12 transition-all duration-300 hover:shadow-xl">
        <h2 className="mb-8 font-serif font-bold text-2xl text-sky-700">
          Contact Information
        </h2>

        <div className="flex flex-col gap-10">
          {/* Address */}
          <div className="flex items-start gap-4">
            <IoLocationOutline className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500 text-white p-3 shadow-md" />
            <div>
              <p className="font-serif font-semibold text-gray-800">Address</p>
              <p className="text-gray-600 text-sm md:text-base">
                47 Isiba Oluwo Street, Egbeda Akowonjo, Lagos State, Nigeria.
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <BsTelephone className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-500 text-white p-3 shadow-md" />
            <div>
              <p className="font-serif font-semibold text-gray-800">Phone</p>
              <p className="text-gray-600 text-sm md:text-base">
                +234-806-669-8202
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
