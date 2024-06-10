import { TbTextResize } from "react-icons/tb";
import Vanaha from "../assets/image/Vanaha-Color.svg";
import Brochure from "../assets/image/brochure.jpg";
import { RiHomeGearLine, RiMapPinLine } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { useContext } from "react";
import { Mycontext } from "../App";

const About = () => {
  const {about}=useContext(Mycontext)

  return (
    <div ref={about} className="flex flex-col py-10 lg:items-center gap-5 lg:gap-10 bg-white lg:text-center w-[90vw] lg:w-[70vw] mx-auto">
      <img src={Vanaha} alt="..." className="lg:h-32 h-24" />
      <p className="lg:text-4xl text-3xl ">Modern homes in a lush green sanctuary</p>
      <p className="text-teal-500 border border-teal-500 w-max p-1 rounded-full px-3">
        Sold Out
      </p>
      <p>
        Life at Vanaha is unlike anything you know. Hear the chirping of the
        birds and ripples of the water in this sanctuary for your mind in Pune's
        prime location.
      </p>
      <p>
        Unmatched by the city life, this unique location is surrounded by hills
        and lush greenery, and receives generous monsoon rains. An endless
        expanse of earth stretching as far as the eyes can see, Vanaha is a
        place that lets you open up your senses and absorb everything that is
        there to feel.
      </p>
      <span className="bg-[#034ea2] lg:block hidden text-white text-[12px] p-2  px-5 rounded-full">
        Enquire
      </span>
      <div className="lg:text-center">
        <p className="lg:text-4xl text-3xl">What's on offer?</p>
        <div className="flex lg:flex-row flex-col justify-center lg:gap-5 gap-2  p-5">
          <div className="flex gap-2 items-center">
            <RiHomeGearLine className=" text-red-400" />
            <p>1, 2 & 3 BHK</p>
          </div>
          <div className="flex gap-2 items-center">
            <RiMapPinLine className="text-yellow-400" />
            <p>Near Bavdhan, Pune </p>
          </div>
          <div className="flex gap-2 items-center">
            <TbTextResize className="text-green-400" />
            <p>41.24–84.52 sq. m.</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegBuilding className="text-blue-400" />
            <p>Up to 21 Floors</p>
          </div>
        </div>
        <p>
          Vanaha is located near Bavdhan in Pune, at one of the largest
          townships in India. It offers spacious 1, 2, and 3 BHK garden
          residences in close proximity to retail outlets. It offers a variety
          of sustainable amenities like an organic waste converter, rainwater
          harvesting, and a water treatment plant. The project delivers security
          features including smoke detector systems and CCTV coverage in all
          common areas.
        </p>
        <p className="py-2 text-blue-500">Disclaimer</p>
        <div className="flex lg:justify-center my-5">
            <img src={Brochure} alt="" className="h-16" />
            <div className="flex items-center gap-1 p-1 px-3 rounded-full border">
                <LiaDownloadSolid className="text-red-400"/>
                <p>Brochure</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
