import { GoArrowRight } from "react-icons/go";
import WhiteLogo from "../../assets/white-logo.svg";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="lg:px-20 lg:py-16 p-5"
      style={{
        background: "linear-gradient(94.05deg, #034ea2 9.13%, #0089cf 91.03%)",
      }}
    >
      <img src={WhiteLogo} className="mb-10" />
      <div className="flex lg:flex-row flex-col text-white gap-20">
        <div className="flex flex-col gap-3 w-56">
          <p className="text-lg font-semibold ">Residential Projects</p>
          <p className="text-sm text-gray-300 ">BKC 9, Mumbai</p>
          <p className="text-sm text-gray-300 ">The Odyssey, Mumbai</p>
          <p className="text-sm text-gray-300 ">BKC 28, Mumbai</p>
          <p className="text-sm text-gray-300 ">SP Kingstown, Pune</p>
          <p className="text-sm text-gray-300 ">The Minerva, Mumbai</p>
          <p className="text-sm text-gray-300 ">Wildernest, Pune</p>
          <p className="text-sm text-gray-300 "> Vanaha, Near Bavdhan, Pune</p>
          <p className="text-sm text-gray-300 ">
            Vanaha Golfland, Near Bavdhan, Pune
          </p>
          <p className="text-sm text-gray-300 ">Northern Lights, Thane</p>
          <p className="text-sm text-gray-300 ">Parkwest 2.0, Bengaluru</p>
          <p className="text-sm text-gray-300 ">Skyraa, Thane</p>
          <p className="text-sm text-gray-300 ">Shukhobrishti, Kolkata</p>
          <p className="text-sm text-gray-300 ">The Designate, Mumbai</p>
          <p className="text-sm text-gray-300 ">Vicinia, Mumbai</p>
          <p className="text-sm text-gray-300 ">SP Residency, Pune</p>
          <p className="text-sm text-gray-300 ">SP Residency, Pune</p>
          <p className="text-sm text-gray-300 ">SP Residency, Pune</p>
          <p className="text-sm text-gray-300 ">
            Vanaha Springs, Near Bavdhan, Pune
          </p>
          <p className="text-sm text-gray-300 ">Parkwest, Bengaluru</p>
        </div>

        <div className="flex flex-col gap-5 w-56">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold ">Joyville Projects</p>
            <p className="text-sm text-gray-300 ">
              Joyville Virar, Mumbai Metropolitan Region
            </p>
            <p className="text-sm text-gray-300 ">Joyville Celestia, Pune</p>
            <p className="text-sm text-gray-300 ">
              Joyville Hadapsar Annexe, Pune{" "}
            </p>
            <p className="text-sm text-gray-300 ">Joyville Sensorium, Pune </p>
            <p className="text-sm text-gray-300 ">Joyville Hinjewadi, Pune </p>
            <p className="text-sm text-gray-300 ">
              Joyville Sky-luxe Hadapsar, Pune{" "}
            </p>
            <p className="text-sm text-gray-300 ">
              Joyville Western Heights, Near Santragachi{" "}
            </p>
            <p className="text-sm text-gray-300 ">
              Joyville Gurugram, Gurugram{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold ">Commercial Projects</p>
            <p className="text-sm text-gray-300 ">SP Infocity, Pune</p>
            <p className="text-sm text-gray-300 ">SP Infocity, Nagpur</p>
            <p className="text-sm text-gray-300 ">SP Infocity, Manesar </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-56">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold ">Locations</p>
            <p className="text-sm text-gray-300 ">Mumbai</p>
            <p className="text-sm text-gray-300 ">Mumbai - Thane</p>
            <p className="text-sm text-gray-300 ">Pune</p>
            <p className="text-sm text-gray-300 ">Bangalore</p>
            <p className="text-sm text-gray-300 ">Kolkata</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold ">Typology</p>
            <p className="text-sm text-gray-300 ">2 BHK Flats in BKC</p>
            <p className="text-sm text-gray-300 ">2 BHK Flats in Powai</p>
            <p className="text-sm text-gray-300 ">3 BHK Flats in Santacruz</p>
            <p className="text-sm text-gray-300 ">4 BHK Flats in Thane West</p>
            <p className="text-sm text-gray-300 ">3 BHK Flats in Thane West</p>
            <p className="text-sm text-gray-300 ">2 BHK Flats in Thane West</p>
            <p className="text-sm text-gray-300 ">1 BHK Flats in Bavdhan</p>
            <p className="text-sm text-gray-300 ">2 BHK Flats in Bavdhan</p>
            <p className="text-sm text-gray-300 ">2 BHK Flats in Bangalore</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-56">
          <div>
            <p className="text-lg font-semibold ">
              Subscribe to our Newsletter
            </p>
            <input
              type="text"
              placeholder="Email address"
              className="bg-transparent border-b focus:ring-0 focus:outline-0"
            />
          </div>
          <div>
            <p className="text-lg font-semibold ">Be our Guest</p>
            <p className="text-sm text-gray-300">
              We have the perfect home and investment for you.
            </p>
            <p className=" text-white flex gap-1 items-center my-10">
              {" "}
              contact <GoArrowRight />
            </p>
          </div>
          <div className="flex items-center gap-5 text-gray-300">
            <FaFacebookF />
            <FaXTwitter />
            <RiInstagramFill />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between hidden  text-gray-300 mt-10 text-sm">
        <p>©2024 Shapoorji Pallonji Group</p>
        <div className="flex gap-10 items-center">
          <p>ISO Certificate</p>
          <p>QHSE Policy</p>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
