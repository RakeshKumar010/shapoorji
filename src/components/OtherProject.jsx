import Project1 from '../assets/image/project.jpg'
import Project2 from '../assets/image/project2.jpg'
import Project3 from '../assets/image/project3.jpg'

const OtherProject = () => {
  return (
    <div className='my-10 p-5'>
      <p className="lg:text-4xl text-3xl text-center uppercase my-10">Other Projects</p>
      <div className="flex justify-center lg:flex-row flex-col items-center gap-10">
        <div className="lg:w-[30%] w-full ">
          <img src={Project1} alt="" className='w-full rounded-md' />
          <div className='flex justify-between'>
            <div>
                <p className="text-2xl">JOYVILLE SENSORIUM</p>
                <p className="text-xl">PUNE</p>
            </div>
            <div>
                <p>Starting at</p>
                <p className="text-[#034ea2]">₹76.5 lakh^</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full ">
          <img src={Project2} alt="" className='w-full rounded-md' />
          <div className='flex justify-between'>
            <div>
                <p className="text-2xl">JOYVILLE SKY-LUXE HADAPSAR</p>
                <p className="text-xl">PUNE</p>
            </div>
            <div>
                <p>Starting at</p>
                <p className="text-[#034ea2]">₹1.45 cr^</p>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] w-full ">
          <img src={Project3} alt="" className='w-full rounded-md' />
          <div className='flex justify-between'>
            <div>
                <p className="text-2xl">JOYVILLE HADAPSAR ANNEXE</p>
                <p className="text-xl">PUNE</p>
            </div>
            <div>
                <p>Starting at</p>
                <p className="text-[#034ea2]">₹39.5 lakh^</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProject;
