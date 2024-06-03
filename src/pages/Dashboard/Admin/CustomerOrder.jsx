import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";
import { Link } from "react-router-dom";

const CustomerOrder =() => {
    const axiosPublic = useAxiosPublic();
    const { data: orders, isLoading, isError } = useQuery({
        queryKey: "orders",
        queryFn: async () => {
          const res = await axiosPublic.get("/bookings");
          return res.data;
        },
      });
    
      if (isLoading) return <div>Loading...</div>;
      if (isError) return <div>Error fetching data</div>;
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-gradient-to-r from-second to-first text-white text-xl">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Name</th>
              <th>Total($)</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item?.name}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src={item?.image} />
                      </div>
                    </div>
                  </div>
                </td>
  
                <td>{item?.userName}</td>
                <td>{item?.price}</td>
                <td>{new Date(item?.date).toLocaleDateString()}</td>
                <td><Link to={`/dashboard/customer-order/${item._id}`} >
                <button className="btn btn-xs bg-first text-white outline-none border-none ">visit</button>
                </Link></td>
  
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
export default CustomerOrder;