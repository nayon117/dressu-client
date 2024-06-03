import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const axiosPublic = useAxiosPublic();
  const params = useParams();

  const {
    data: bookings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["bookings", params.id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/booking/${params.id}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  console.log(bookings);

  return (
    <section className="overflow-x-auto">
      <div className="flex flex-col p-10 gap-5">
        <p className="text-base-bold">
          Order ID: <span className="text-base-medium">{bookings._id}</span>
        </p>
        <p className="text-base-bold">
          Transaction ID:{" "}
          <span className="text-base-medium">{bookings.transactionId}</span>
        </p>
        <p className="text-base-bold">
          Customer name:{" "}
          <span className="text-base-medium">{bookings.userName}</span>
        </p>
        <p className="text-base-bold">
          Shipping address:{" "}
          <span className="text-base-medium">
            {bookings.address}, {bookings.district},{bookings.division}
          </span>
        </p>
        <p className="text-base-bold">
          Category:{" "}
          <span className="text-base-medium">${bookings.category}</span>
        </p>
        <p className="text-base-bold">
          Total Paid:{" "}
          <span className="text-base-medium">${bookings.price}</span>
        </p>

        <table className="table w-full">
          {/* head */}
          <thead className="text-base text-gray-700">
            <tr>
              <th>Product</th>

              <th>Size</th>
              <th>Quantity</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bookings?.name}</td>
              <td>{bookings?.selectedSize}</td>
              <td>{bookings?.selectedQuantity}</td>
              <td>{bookings?.brand}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderDetails;
