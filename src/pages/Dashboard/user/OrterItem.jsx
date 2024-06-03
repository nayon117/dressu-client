import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrderCard from "./MyOrderCard";

const OrderItem = () => {
  const { user } = useAuth() || {};
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://dressu-server.vercel.app/bookings?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

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
