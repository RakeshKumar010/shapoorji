import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Mycontext } from "../App";

const Contact = () => {
  const {contact}=useContext(Mycontext)

  return (
    <div ref={contact} className="flex lg:flex-row flex-col gap-10 px-5 lg:px-10 my-28">
      <p className="text-4xl lg:block hidden  w-full md:w-[33%]">
        Contact <br />
        Vanaha
      </p>
      <p className="text-3xl text-[#034ea2] lg:hidden block my-5 w-full md:w-[33%]">
        Contact Vanaha
      </p>
      <div className="w-full flex items-start gap-10 flex-col md:w-[33%]">
        <div>
          <p className="text-lg"> Brochure</p>
          <p className="flex border-[#034ea2] items-center border p-2 gap-2  w-max text-[#034ea2] rounded-full">
            Download <BsArrowRight />
          </p>
        </div>
        <div>
          <p className="text-lg">Site Address</p>
          <p className="text-sm text-gray-500 w-60">
            Shapoorji Pallonji Experience Center, Gate No. 1656, Flame Ring
            Road, Lavale, Mulshi Taluka, Pune - 412115
          </p>
        </div>
      </div>
      <div className="w-full flex items-start gap-10 flex-col md:w-[33%]">
        <div>
          <p className="text-lg"> Contact Guest Manager</p>
          <p className="flex border-[#034ea2] items-center w-max  border p-2 gap-2 text-[#034ea2] rounded-full">
            Enquire <BsArrowRight />
          </p>
        </div>
        <div>
          <p className="text-lg">Corporate Address</p>
          <p className="text-sm text-gray-500 w-60">
            Shapoorji Pallonji Real Estate, SP Center 41/44, Minoo Desai Marg,
            Colaba, Mumbai - 400005
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
