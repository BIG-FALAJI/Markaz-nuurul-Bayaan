import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/component/ui/bento-grid";
import images from "@/Data/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  ModalFooter,
} from "@/component/ui/animated-modal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Modal>
      <div
        data-aos="fade-up"
        className="pt-[6rem] md:pt-[8rem] pb-20 px-5 bg-gradient-to-b from-sky-50 to-sky-100"
      >
        <h1 className="text-center text-sky-700 font-serif font-bold md:text-[2.5rem]">
          Gallery
        </h1>
        <BentoGrid className="max-w-6xl mx-auto">
          {images.map((image, i) => (
            <ModalTrigger>
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
            </ModalTrigger>
          ))}
        </BentoGrid>
      </div>
      <ModalBody>
        {selectedImage && (
          <>
            <ModalContent>
              <img src={selectedImage.image} alt={selectedImage.title} />
            </ModalContent>
            <ModalFooter className="gap-4 flex-col">
              <p>{selectedImage.description}</p>
            </ModalFooter>
          </>
        )}
      </ModalBody>
    </Modal>
  );
};

export default Gallery;
