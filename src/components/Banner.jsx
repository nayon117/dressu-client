import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTypewriter } from 'react-simple-typewriter'

const Banner = () => {

  const [typeEffect] = useTypewriter({
    words: ['possibilities', 'and uncover', 'new horizons of growth', 'and innovation!'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed:50
  })

  return (
    <Carousel >
      <div className="relative ">
        <img
          className="max-h-[550px] hero-overlay opacity-30 rounded-md"
          src="https://i.ibb.co/L06TySB/marvin-meyer-SYTO3xs06f-U-unsplash-min.jpg"
         
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">Explore limitless
          <span className='font-bold text-red-500 ml-2'>{typeEffect}</span>
          </h3>
          <p className="md:text-xl">Embark on a journey of discovery, where creativity meets lifelong learning</p>
        </div>
      </div>
      <div className="relative">
        <img
         className="max-h-[550px] hero-overlay opacity-40 rounded-md"
          src="https://i.ibb.co/7bt5M4j/campaign-creators-g-Msn-Xq-ILjp4-unsplash-min.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">Ignite your passion for learning.</h3>
          <p className="md:text-xl">Education without boundaries, empowering critical thinking and global citizenship.</p>
        </div>
      </div>
      <div className="relative">
        <img
         className="max-h-[550px] hero-overlay opacity-30 rounded-md"
          src="https://i.ibb.co/qJ2gm6f/charlesdeluvio-Lks7vei-e-Ag-unsplash-1-min.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">Building a brighter tomorrow</h3>
          <p className="md:text-xl">Transformative education shaping leaders, inspiring and empowering lives</p>
        </div>
      </div>
      <div className="relative">
        <img
          className="max-h-[550px] hero-overlay opacity-30 rounded-md"
          src="https://i.ibb.co/4K072Dm/kobu-agency-7okk-Fhxrx-Nw-unsplash-min.jpg"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-xl md:text-2xl lg:text-4xl mb-3 font-medium">Join us in the pursuit of knowledge.</h3>
          <p className="text-xl">A community for growth and excellence, embracing diversity for success</p>
        </div>
      </div>
    </Carousel>
  );
};
export default Banner;
