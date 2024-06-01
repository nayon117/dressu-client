import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../api/useAxiosPublic";
import ApprovedCard from "../pages/AllClasses/ApprovedCard";

const Recommend = () => {
  const axiosPublic = useAxiosPublic();
  const { data: recommends = [] } = useQuery({
    queryKey: ["recommended"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recommended-classes");
      return res.data;
    },
  });
   
  return (
    <div>
      <div className="mt-12">
        <h2 className="title text-center">Latest Arrivals</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          recommends?.map(approved => <ApprovedCard
            key={approved._id}
             approved={approved}
          ></ApprovedCard>)
        }
      </div>
    </div>
  );
};
export default Recommend;
