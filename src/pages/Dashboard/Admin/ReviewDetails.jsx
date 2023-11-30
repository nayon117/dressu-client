import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";
import ReviewCard from "./ReviewCard";


const ReviewDetails = () => {
    const axiosPublic = useAxiosPublic()
  const { data: reviews = [] } = useQuery({
    queryKey: ['review'],
    queryFn: async () => {
      const res = await axiosPublic('/reviews')
      return res.data;
    }
  })
  return (
    <div className="mt-12">
          <h2 className="text-3xl font-bold">Students FeedBacks</h2>
          <div className="grid grid-cols-1 mt-12 gap-6">
              {
                  reviews?.map(review => <ReviewCard
                      key={review._id}
                      review={review}
                  ></ReviewCard>)
              }
          </div>
    </div>
  );
};
export default ReviewDetails;