import toast from "react-hot-toast";
import axiosSecure from "../../../api";
import { useEffect, useState } from "react";
import { TbProgressBolt } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllClassesAdmin = () => {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosSecure.get("/class-add/all/requests");
        console.log(data);
        setClassData(data);
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };

    fetchData();
  }, []);

  const approveClass = async (id) => {
    const { data } = await axiosSecure.put(`/class-add/approve/${id}`);
    console.log(data);
    if (data.modifiedCount > 0) {
      setClassData((prevData) =>
        prevData.map((classItem) =>
          classItem._id === id
            ? { ...classItem, status: "Approved" }
            : classItem
        )
      );
      toast.success("class approved successfully");
    }
  };

  const rejectClass = async (id) => {
    const { data } = await axiosSecure.put(`/class-add/reject/${id}`);
    console.log(data);
    if (data.modifiedCount > 0) {
      setClassData((prevData) =>
        prevData.filter((classItem) => classItem._id !== id)
      );
      toast.error("Class rejected successfully");
    }
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
            <th>Action</th>
            <th>Action</th>
            <th>see progress</th>
          </tr>
        </thead>
        <tbody>
          {classData.map((classItem, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{classItem.title}</td>
              <td>{classItem.image}</td>
              <td>{classItem.email}</td>
              <td>
                <button
                  className="btn btn-xs bg-[#332883] text-white"
                  onClick={() => approveClass(classItem._id)}
                >
                  {classItem.status}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-xs bg-[#332883] text-white"
                  onClick={() => rejectClass(classItem._id)}
                >
                  Reject
                </button>
              </td>
              <td className=" flex items-center justify-center">
                {classItem.status === "approved" ? (
                  <Link to={`/dashboard/all-classes-admin/${classItem._id}`}>
                    <TbProgressBolt className="text-xl" />
                  </Link>
                ) : (
                  <button
                    disabled
                    className="text-xl opacity-50 cursor-not-allowed"
                  >
                    <TbProgressBolt />
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

export default AllClassesAdmin;
