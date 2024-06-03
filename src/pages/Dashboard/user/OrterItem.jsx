import useAuth from "../../../hooks/useAuth";
import MyOrderCard from "./MyOrderCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";

const OrderItem = () => {

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth() || {};

  const { data:orders, isLoading, isError} = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
          const res = await axiosPublic.get(`/personal-bookings?userEmail=${user.email}`);
          return res.data;
      },
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center font-bold mt-12">My Order Items</h2>
      </div>
      {orders.length === 0 ? (
        <p className="flex items-center justify-center min-h-[65vh] text-2xl font-bold">
          You have not ordered any product yet
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-12">
          {orders?.map((enroll) => (
            <MyOrderCard key={enroll._id} enroll={enroll}></MyOrderCard>
          ))}
        </div>
      )}
    </div>
  );
};
export default OrderItem;
