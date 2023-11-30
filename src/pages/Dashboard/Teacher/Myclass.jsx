import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";

const Myclass = () => {
  const [myClasses, setMyClasses] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/class-add/requests?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [user?.email]);

  const handleDeleteClass = (classItem) => {
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
        const res = await axiosSecure.delete(`/class-add/${classItem._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          setMyClasses((prevClasses) =>
            prevClasses.filter((item) => item._id !== classItem._id)
          );
          Swal.fire({
            title: "Deleted!",
            text: `${classItem.name}file has been deleted`,
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
        <thead className="text-base">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Email</th>
            <th>status</th>
            <th>update</th>
            <th>Delete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((classItem, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{classItem.title}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={classItem.image} />
                    </div>
                  </div>
                </div>
              </td>

              <td>{classItem.email}</td>
              <td>
                <button className="btn btn-xs bg-[#332883] text-white">
                  {classItem.status}
                </button>
              </td>
              <td>
                <Link to={`/dashboard/UpdateClass/${classItem._id}`}>
                  <button className="text-xl">
                    <FaEdit />
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="text-xl"
                  onClick={() => handleDeleteClass(classItem)}
                >
                  <MdDeleteForever />
                </button>
              </td>
              <td>
                {classItem.status === "approved" ? (
                  <Link to={`/dashboard/my-class/${classItem._id}`}>
                    <button className="btn btn-xs bg-[#332883] text-white">
                      see details
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="btn btn-xs bg-[#332883] text-white opacity-50 cursor-not-allowed"
                  >
                    see details
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Myclass;
