import { Zap, X } from "lucide-react";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/component/ui/bento-grid";
import images from "@/Data/image";
import Modal from "@/component/Modal";
import { MdCancel } from "react-icons/md";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      data-aos="fade-up"
      className="pt-[6rem] md:pt-[8rem] pb-20 px-5 bg-gradient-to-b from-sky-50 to-sky-100"
    >
      <h1 className="text-center text-sky-700 font-serif font-bold md:text-[2.5rem]">
        Gallery
      </h1>
      <BentoGrid className="max-w-6xl mx-auto">
        {images.map((image, i) => (
          <BentoGridItem
            key={i}
            title={image.title}
            description={image.description}
            header={
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-40 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
                onClick={() => setSelectedImage(image)} // 👈 open modal with that image
              />
            }
            // icon={<Zap className="w-6 h-6 text-sky-600" />}
          />
        ))}
      </BentoGrid>

      {/* Modal - show only if there's a selected image */}
      {selectedImage && (
        <Modal>
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 top-24 bg-black/30 flex items-start md:items-center justify-center z-50 p-4"
          >
            <div className="relative bg-white p-4 rounded-xl shadow-lg max-w-3xl w-full">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-white p-1 rounded-full bg-sky-500"
                onClick={() => setSelectedImage(null)}
              >
                <MdCancel className="w-6 h-6" />
              </button>

              {/* Show full image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] max-w-full rounded-lg object-contain mx-auto"
              />
              <p className="text-center mt-2 text-sky-700 font-semibold">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
