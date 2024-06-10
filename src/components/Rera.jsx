import { Link } from "react-router-dom";
import ReraImg from "../assets/image/rera.jpg";
import Qr1 from "../assets/qr/qr1.png";
import Qr2 from "../assets/qr/qr2.png";
import Qr3 from "../assets/qr/qr3.png";
import { BsFileEarmarkPdf } from "react-icons/bs";
const Rera = () => {
  return (
    <div className="flex lg:justify-center px-5 lg:px-10 gap-20 my-10">
      <img src={ReraImg} alt="" className="rounded-full w-96 h-96 lg:block hidden" />
      <div className="text-gray-600 flex flex-col gap-4">
        <p className="text-2xl">MahaRERA Registration Numbers</p>
        <Link
          className="text-[#034ea2]"
          to={"https://maharera.mahaonline.gov.in/"}
        >
          https://maharera.mahaonline.gov.in/
        </Link>
        <p>Vanaha, Near Bavdhan, Pune</p>
        <div className="flex text-sm gap-1 lg:gap-10">
          <div>
            <img src={Qr1} alt="" className="w-32" />
            <p>Yahavi Tower 1-OAK</p>
            <p>P52100028031</p>
          </div>
          <div>
            <img src={Qr2} alt="" className="w-32" />
            <p>Yahavi Tower 2-PINE</p>
            <p>P52100028082</p>
          </div>
          <div>
            <img src={Qr3} alt="" className="w-32" />
            <p>Yahavi Tower 3-TEAK</p>
            <p>P52100028033</p>
          </div>
        </div>
        <hr className="text-black" />
        <p className="text-2xl">Project Updates</p>
        <div  className="flex lg:flex-wrap flex-col gap-10">
        <div className="flex">
          <BsFileEarmarkPdf className="text-5xl" />
          <div>
            <p>May 13, 2022</p>
            <p>Ec Letter</p>
          </div>
        </div>
        <div className="flex">
          <BsFileEarmarkPdf className="text-5xl" />
          <div>
            <p>June 10, 2022</p>
            <p>Half Year EC Complaince Report 2022</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Rera;
