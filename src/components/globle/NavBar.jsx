import { useContext } from "react";
import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.png";
import { Mycontext } from "../../App";

const NavBar = () => {
  const topSpace = 100;
  const scrollToRef = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - topSpace,
      behavior: "smooth",
    });
  };
  const {
    home,
    about,
    floor,
    amenities,
    gallery,
    emi,
    contact,
    location,
    rera,
  } = useContext(Mycontext);

  return (
    <div className="flex items-center z-20 justify-between shadow-xl h-20 px-5 lg:px-16 fixed left-0 right-0 top-0 bg-white">
      <img
        src={Logo}
        alt=".."
        className="lg:w-auto w-48"
        onClick={() => {
          scrollToRef(home);
        }}
      />
      <div className="hidden gap-5 lg:flex">
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(about);
          }}
        >
          About
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(gallery);
          }}
        >
          Gallery
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(floor);
          }}
        >
          Floor Plans
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(emi);
          }}
        >
          EMI Calculator
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(amenities);
          }}
        >
          Amenities
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(location);
          }}
        >
          Location
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(rera);
          }}
        >
          RERA
        </p>
        <p
          className="cursor-pointer text-sm hover:text-[#034ea2]"
          onClick={() => {
            scrollToRef(contact);
          }}
        >
          Contact
        </p>
      </div>
      <div className=" flex gap-10 items-center">
        <span className="bg-[#034ea2] hidden lg:block text-white text-[12px] p-2  px-5 rounded-full">
          Enquire
        </span>
        <div className="flex flex-col justify-center items-center ">
          <img src={Menu} alt="" className="h-6" />
          <p className="text-[12px]">Menu</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
