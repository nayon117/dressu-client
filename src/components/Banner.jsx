import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "style",
      "trends",
      "fashion",
      "elegance",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <Carousel>
      <div className="relative ">
        <img
          className="max-h-[550px] hero-overlay opacity-50 rounded-md"
          src="https://i.ibb.co/0jdGL7q/hannah-morgan-yc-VFts5-Ma4s-unsplash.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="title mb-3 ">
            Discover your
            <span className="font-bold text-red-500 ml-2">{typeEffect}</span>
          </h3>
          <p className="subtitle">
            Explore the latest trends and find your unique style.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          className="max-h-[550px] hero-overlay opacity-50 rounded-md"
          src="https://i.ibb.co/0m9GsKJ/clark-street-mercantile-qn-Kh-ZJPKFD8-unsplash.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">
            Embrace your personal
          </h3>
          <p className="md:text-xl">
            Express yourself with our diverse collection of clothing.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          className="max-h-[550px] hero-overlay opacity-50 rounded-md"
          src="https://i.ibb.co/gZkVKwz/clark-street-mercantile-P3p-I6xzovu0-unsplash.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">
            Redefine your
          </h3>
          <p className="md:text-xl">
            Elevate your wardrobe with timeless pieces and modern trends.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          className="max-h-[550px] hero-overlay opacity-50 rounded-md"
          src="https://i.ibb.co/9wpXcJV/lan-deng-quddu-d-ZKk-Q-unsplash.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">
            Stay ahead in
          </h3>
          <p className="text-xl">
            Be the trendsetter with our latest arrivals and exclusive designs.
          </p>
        </div>
      </div>
    </Carousel>
  );
};
export default Banner;
