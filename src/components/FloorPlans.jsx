import Gallery1 from "../assets/gallery/Vanaha-[1-BHK].jpg";
import Gallery2 from "../assets/gallery/Vanaha-[2-BHK].jpg";
import Gallery3 from "../assets/gallery/Vanaha-[3-BHK-Grande].jpg";
import Gallery4 from "../assets/gallery/Vanaha-[3-BHK].jpg";
import Gallery5 from "../assets/gallery/Vanaha-[4-BHK].jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useContext, useRef } from "react";
import { Mycontext } from "../App";

const FloorPlans = () => {
  const {floor}=useContext(Mycontext)

  const galleryRef = useRef();
  const slideRight = () => {
    galleryRef.current.scrollBy({ left: 750, behavior: "smooth" }); // Adjust the value as needed
  };

  const slideLeft = () => {
    galleryRef.current.scrollBy({ left: -750, behavior: "smooth" }); // Adjust the value as needed
  };
  return (
    <div className="lg:p-8 px-4" ref={floor}>
      <div className="flex justify-between">
        <div className=" py-3  px-0 lg:px-10">
          <p className="lg:text-3xl text-2xl py-3  lg:px-10">Floor Plans</p>
          <div className=" gap-5 my-5 lg:flex hidden">
            <p className="p-2 px-3 border-gray-400 rounded-md border bg-[#034ea2] text-white ">
              1 BHK
            </p>
            <p className="p-2 px-3 border-gray-400 rounded-md border">2 BHK</p>
            <p className="p-2 px-3 border-gray-400 rounded-md border">3 BHK</p>
            <p className="p-2 px-3 border-gray-400 rounded-md border">4 BHK</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <AiOutlineLeft
            onClick={slideLeft}
            className="  bg-gray-100 lg:h-10 lg:w-10 h-6 w-6 p-1 rounded-full shadow-md    "
          />
          <AiOutlineRight
            onClick={slideRight}
            className="  bg-gray-100 lg:h-10 lg:w-10 h-6 w-6 p-1 rounded-full shadow-md    "
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
      </div>
    </div>
  );
};

export default FloorPlans;
