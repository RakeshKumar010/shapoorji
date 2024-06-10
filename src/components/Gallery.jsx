import Gallery1 from "../assets/gallery/gallery1.webp";
import Gallery2 from "../assets/gallery/gallery2.webp";
import Gallery3 from "../assets/gallery/gallery3.webp";
import Gallery4 from "../assets/gallery/gallery4.webp";
import Gallery5 from "../assets/gallery/gallery5.webp";
import Gallery6 from "../assets/gallery/gallery6.webp";
import Gallery7 from "../assets/gallery/gallery7.webp";
import Gallery8 from "../assets/gallery/gallery8.webp";
import Gallery9 from "../assets/gallery/gallery9.webp";
import Gallery10 from "../assets/gallery/gallery10.webp";
import Gallery11 from "../assets/gallery/gallery11.webp";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useContext, useRef } from "react";
import { Mycontext } from "../App";

const Gallery = () => {
  const galleryRef = useRef();
  const {gallery}=useContext(Mycontext)

  const slideRight = () => {
    galleryRef.current.scrollBy({ left: 750, behavior: "smooth" }); // Adjust the value as needed
  };

  const slideLeft = () => {
    galleryRef.current.scrollBy({ left: -750, behavior: "smooth" }); // Adjust the value as needed
  };
  return (
    <div className="lg:p-8 px-4" ref={gallery}>
      <div className="flex justify-between">
        <p className="lg:text-3xl text-2xl py-3  lg:px-10">Project Gallery</p>
        <div className="flex gap-5 items-center">
          <AiOutlineLeft
            onClick={slideLeft}
            className="  bg-gray-100 lg:h-10 lg:w-10 h-6 w-6 p-1 rounded-full shadow-md   "
          />
          <AiOutlineRight
            onClick={slideRight}
            className="  bg-gray-100 lg:h-10 lg:w-10 h-6 w-6 p-1 rounded-full shadow-md   "
          />
        </div>
      </div>
      <div
        className="  flex items-center gap-6 relative"
        style={{ overflow: "hidden" }}
        ref={galleryRef}
      >
        <img src={Gallery1} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery2} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery3} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery4} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery5} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery6} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery7} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery8} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery9} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery10} alt="" className="w-[47vw]  rounded-md" />
        <img src={Gallery11} alt="" className="w-[47vw]  rounded-md" />
      </div>
    </div>
  );
};

export default Gallery;
