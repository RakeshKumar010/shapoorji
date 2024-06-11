import React, { useContext } from "react";
import { Mycontext } from "../App";

const Amenitie = () => {
  const { amenities } = useContext(Mycontext);
  return (
    <div ref={amenities} className="lg:p-10 p-5 ">
      <div className="flex flex-col pt-32 py-10 lg:items-center lg:text-center gap-5  lg:gap-10">
        <p className="lg:text-4xl text-3xl  lg:text-center">Amenities</p>
        <p className="lg:w-1/2 w-full">
          Enjoy a life of leisure and convenience with a myriad of modern
          lifestyle amenities with Productive Landscape and even a No-car Zone
          as well as a Wi-Fi Zone.
        </p>
        <p className="text-sm bg-[#034ea2] text-white px-3 py-2 rounded-full w-max">
          View Specifications
        </p>
      </div>

      <div className="bg-[#f05862] rounded-t-md   flex lg:flex-row flex-col lg:gap-52 p-10 text-2xl  text-white">
        <p className=" text-start ">SPORTS</p>
        <p className="text-lg pt-5 lg:text-7xl leading-tight">
          Rock Climbing <br /> Shapoorji Pallonji Vanaha Rock Climbing
          Multi-purpose Court (Basketball, Volleyball, Cricket, Badminton,
          Tennis) Shapoorji Pallonji Vanaha Multi-purpose Court (Basketball,
          Volleyball, Cricket, Badminton, Tennis) Squash Court Shapoorji
          Pallonji Vanaha Squash Court Table Tennis
        </p>
      </div>
      <div className="bg-[#ecb224]     flex lg:flex-row flex-col lg:gap-52 p-10 text-2xl  text-white">
        <p className=" text-start ">LEISURE</p>
        <p className="text-lg pt-5 lg:text-7xl leading-tight">
          Terrace Café Shapoorji Pallonji Vanaha Terrace Café Kids’ Pool
          Shapoorji Pallonji Vanaha Kids’ Pool Swimming Pool Shapoorji Pallonji
          Vanaha Swimming Pool Pool Deck Shapoorji Pallonji Vanaha Pool Deck
          Card Table Shapoorji Pallonji Vanaha Card Table Indoor Games Room
          Shapoorji Pallonji Vanaha Indoor Games Room Snooker/Pool Table
          Shapoorji Pallonji Vanaha Snooker/Pool Table Reading Room Shapoorji
          Pallonji Vanaha Reading Room Urban Farming Shapoorji Pallonji Vanaha
          Urban Farming Viewing Deck Shapoorji Pallonji Vanaha Viewing Deck
          Gazebo/Pavilion Shapoorji Pallonji Vanaha Gazebo/Pavilion Sandpit Area
          Shapoorji Pallonji Vanaha Sandpit Area Orchard Shapoorji Pallonji
          Vanaha Orchard Seating Areas Shapoorji Pallonji Vanaha Seating Areas
          Public Plaza Shapoorji Pallonji Vanaha Public Plaza Parametric Seating
          Shapoorji Pallonji Vanaha Parametric Seating Modern Sculpture
          Shapoorji Pallonji Vanaha Modern Sculpture Space for Spa
        </p>
      </div>
      <div className="bg-[#00a38b]     flex lg:flex-row flex-col lg:gap-52 p-10 text-2xl  text-white">
        <p className=" text-start ">HEALTH</p>
        <p className="text-lg pt-5 lg:text-7xl leading-tight">
          Gymnasium Shapoorji Pallonji Vanaha Gymnasium Walking/Jogging Track
          Shapoorji Pallonji Vanaha Walking/Jogging Track Yoga Deck Shapoorji
          Pallonji Vanaha Yoga Deck Cycling Track Shapoorji Pallonji Vanaha
          Cycling Track Boardwalk Shapoorji Pallonji Vanaha Boardwalk Garden
          Walkway
        </p>
      </div>
      <div className="bg-[#d490a0] rounded-b-md    flex lg:flex-row flex-col lg:gap-52 p-10 text-2xl  text-white">
        <p className=" text-start ">COMMUNITY</p>
        <p className="text-lg pt-5 lg:text-7xl leading-tight">
          Kids’ Play Area Shapoorji Pallonji Vanaha Kids’ Play Area Amphitheatre
          Shapoorji Pallonji Vanaha Amphitheatre Barbeque Zone Shapoorji
          Pallonji Vanaha Barbeque Zone Camping Zone Shapoorji Pallonji Vanaha
          Camping Zone Clubhouse Shapoorji Pallonji Vanaha Clubhouse
          Multi-purpose Hall with Party Deck Shapoorji Pallonji Vanaha
          Multi-purpose Hall with Party Deck Coworking Lounge Shapoorji Pallonji
          Vanaha Coworking Lounge Day Care/Crèche Shapoorji Pallonji Vanaha Day
          Care/Crèche Convenience Retail
        </p>
      </div>
    </div>
  );
};

export default Amenitie;
