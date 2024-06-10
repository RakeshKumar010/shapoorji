import React from "react";

const Location = () => {
  return (
    <div className="text-start flex flex-col gap-5 px-5 lg:px-10 lg:py-52 py-16 ">
      <p className="lg:text-4xl text-3xl ">6 km from Chandni Chowk</p>
      <p className="text-sm text-gray-500 lg:w-96">
        Ryan International School, Symbiosis International University, and
        Chellaram Diabetic Centre are in a 5 km radius. Various hospitals as
        well as commercial and business hubs are also within a 10 km radius.
      </p>
      <p className="text-sm bg-[#034ea2] text-white px-3 py-2 rounded-full w-max">View on Map</p>
    </div>
  );
};

export default Location;
