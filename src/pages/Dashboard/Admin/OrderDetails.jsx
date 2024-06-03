import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
    const axiosPublic = useAxiosPublic();
    const params = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", params.id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booking/${params.id}`);
            return res.data;
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    console.log(data);

    return (
        <section className=''>
            <div className=''>
                Welcome to OrderDetails
            </div>
        </section>
    );
};

export default OrderDetails;
