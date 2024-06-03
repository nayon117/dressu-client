import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dressu-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== item._id)
          );
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="bg-gradient-to-r from-second to-first text-white text-xl">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Category</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={item.image} />
                    </div>
                  </div>
                </div>
              </td>

              <td>{item.category}</td>

              <td>
                <Link to={`/dashboard/update-product/${item._id}`}>
                  <button className="text-xl">
                    <FaEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="text-xl"
                  onClick={() => handleDeleteProduct(item)}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MyProduct;
