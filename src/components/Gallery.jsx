import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia"
import { GrClose } from "react-icons/gr"

export default function Gallery({ servicesGallery }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesGallery.map((item, index) => (
            <div
              className="overflow-hidden aspect-square cursor-pointer group"
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <img
                loading="lazy"
                src={item}
                alt=""
                className="group-hover:scale-125 duration-500 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox component */}
      {open && (
        <Lightbox
        render={{
            iconPrev: () => <LiaAngleLeftSolid size={40} />,
            iconNext: () => <LiaAngleRightSolid size={40} />,
            iconClose: () => <GrClose size={24} />,
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .85)" },
            slide: { cursor: "grab" },
          }}
          open={open}
          close={() => setOpen(false)}
          slides={servicesGallery.map((image) => ({ src: image }))}
          index={currentIndex}
        />
      )}
    </section>
  );
}
