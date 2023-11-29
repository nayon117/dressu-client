 
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const ReviewSec = () => {
  
  const axiosPublic = useAxiosPublic()
  const { data: reviews = [] } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      const res = await axiosPublic('/reviews')
      return res.data;
    }
  })
   
  return (
    <section className="mt-20">
     
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 flex flex-col items-center ">
                    <Rating style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly />
                    <BiSolidQuoteLeft className="text-4xl mt-4"></BiSolidQuoteLeft>
              <p className="py-8">{review.description}</p>
              <h3 className="text-2xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default ReviewSec;