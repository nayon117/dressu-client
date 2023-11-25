import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img
          className="max-h-[550px] rounded-md"
          src="https://i.ibb.co/ngnYp47/img1.jpg"
        />
      </div>
      <div>
        <img
          className="max-h-[550px] rounded-md"
          src="https://i.ibb.co/dprqznD/img2.jpg"
        />
      </div>
      <div>
        <img
          className="max-h-[550px] rounded-md"
          src="https://i.ibb.co/wKXTxM8/img3.jpg"
        />
      </div>
      <div>
        <img
          className="max-h-[550px] rounded-md"
          src="https://i.ibb.co/Jsv6mdS/img4.jpg"
        />
      </div>
    </Carousel>
  );
};
export default Banner;
