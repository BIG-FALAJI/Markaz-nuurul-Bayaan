import React from "react";
import { Link } from "react-router";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 ">
      <a
        href="https://tinyurl.com/4tpaxu4s"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
      >
        <BsWhatsapp className="text-white text-3xl shadow-sm hover:shadow-md" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
