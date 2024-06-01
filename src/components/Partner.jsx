import { FaInstagram,  FaTwitter } from "react-icons/fa";
import { SiZara, SiPinterest } from "react-icons/si";
import { SiAstro } from "react-icons/si";

export default function Partner() {
  return (
    <div className="mt-12">
      <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
        <div className="md:py-12 py-8 px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">
              Our Fashion Partners
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">
              Explore our collaborations with leading fashion brands and
              influencers in the industry.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
              <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                <SiAstro className="text-2xl" />
                <span className="text-2xl">ASOS</span>
              </div>
              <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                <SiZara className="text-2xl" />
                <span className="text-2xl">ZARA</span>
              </div>
              <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                <SiPinterest className="text-2xl" />
                <span className="text-2xl">Pinterest</span>
              </div>
              <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                <FaInstagram className="text-2xl" />
                <span className="text-2xl">Instagram</span>
              </div>
              <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                <FaTwitter className="text-2xl" />
                <span className="text-2xl">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10">
        <img
          className="w-full xl:h-full object-cover"
          src="https://i.ibb.co/RTgXPwx/map.png"
          alt="Map"
        />
      </div>
    </div>
  );
}
