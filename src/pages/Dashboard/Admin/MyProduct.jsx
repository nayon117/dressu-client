import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import useAxiosPublic from "../../../api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyProduct = () => {
  const axiosPublic = useAxiosPublic();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data: response, isLoading, isError, refetch } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?page=${currentPage}&size=${itemsPerPage}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const { products, count } = response;

  const totalPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(totalPages).keys()];

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
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  const handleItemsPerPageChange = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead className="bg-gradient-to-r from-second to-first text-white text-xl">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={item.image} alt={item.name} />
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
                <button className="text-xl" onClick={() => handleDeleteProduct(item)}>
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-12 items-center justify-center">
        <button
          onClick={handlePrevPage}
          className="btn mx-2 btn-sm bg-first hover:bg-white hover:text-first text-white"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn mr-2 btn-sm ${
              page === currentPage ? "bg-red-500" : "bg-second hover:bg-white hover:text-second"
            } text-white`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="btn mx-2 btn-sm bg-first hover:bg-white hover:text-first text-white"
        >
          Next
        </button>
        <select
          onChange={handleItemsPerPageChange}
          value={itemsPerPage}
          className="btn mr-2 btn-sm bg-second text-white outline-none hover:bg-white hover:text-second"
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default MyProduct;
