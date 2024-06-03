import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import useAxiosPublic from "../../api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const CardDetails = () => {
  const axiosPublic = useAxiosPublic();
  const params = useParams();

    const { data:detailInfo, isLoading, isError } = useQuery({
        queryKey: ["products", params.id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product/${params.id}`);
            return res.data;
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
    
  return (
    <div>
          <div>
              <DetailsCard detailInfo={detailInfo}></DetailsCard>
       </div>
    </div>
  );
};
export default CardDetails;