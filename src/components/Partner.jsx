import { FaCode, FaFreeCodeCamp, FaGoogle, FaLinkedin } from "react-icons/fa";
import { SiCoursera, SiUdemy } from "react-icons/si";

export default function Partner() {
  return (
      <div className="mt-12">
          <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
      <div className="md:py-12 py-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">
            Our Trusted Partners
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">
            We just got featured in the following magazines and it has been the
            most incredible journey. We work with the best learning platform
            across the world
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <FaGoogle className="text-2xl"></FaGoogle>
              <span className="  text-2xl">oogle</span>
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <SiCoursera className="text-2xl" />
              <span className="text-2xl">oursera</span>
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <SiUdemy className="text-2xl" />
              <span className="text-2xl">demy</span>
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <span className="text-2xl">Linked</span>
              <FaLinkedin className="text-2xl" />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <FaFreeCodeCamp className="text-2xl" />
              <span className="text-2xl">FCCamp</span>
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
              <FaCode className="text-2xl" />
              <span className="text-2xl"> Udacity</span>
            </div>

           
          </div>
        </div>
      </div>
      </div>
       <div className=" flex justify-center items-center pt-10  ">
       <img
         className="w-full xl:h-full object-cover  "
         src="https://i.ibb.co/RTgXPwx/map.png"
        
       />
     </div>
    </div>
  );
}
