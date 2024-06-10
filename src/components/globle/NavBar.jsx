import Logo from "../../assets/logo.svg";
import Menu from "../../assets/menu.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between shadow-xl h-20 px-5 lg:px-16 fixed left-0 right-0 top-0 bg-white">
      <img src={Logo} alt=".." className="lg:w-auto w-48" />
      <div className="hidden gap-5 lg:flex">
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">About</p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">Gallery</p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">
          Floor Plans
        </p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">
          EMI Calculator
        </p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">Amenities</p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">Location</p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">RERA</p>
        <p className="cursor-pointer text-sm hover:text-[#034ea2]">Contact</p>
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
