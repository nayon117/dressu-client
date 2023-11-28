import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axiosSecure from "../../../api";

const Myclass = () => {
  const [myClasses, setMyClasses] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/class-add/requests')
    .then(res=>res.json())
    .then(data=>setMyClasses(data))
  }, [])
  
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
          setMyClasses(prevClasses =>
            prevClasses.filter(item => item._id !== classItem._id)
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
      <table className="table">
        {/* head */}
        <thead>
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
              <td>{classItem.image}</td>
              <td>{classItem.email}</td>
              <td>
                <button>{classItem.status}</button>
              </td>
              <td>
              <Link to={`/dashboard/UpdateClass/${classItem._id}`}>
               
                <button><FaEdit /></button>
               
                </Link>
                </td>
              <td>
                 <button onClick={()=>handleDeleteClass(classItem)}> <MdDeleteForever/></button> 
              </td>
              <td>
                <button>see details</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Myclass;