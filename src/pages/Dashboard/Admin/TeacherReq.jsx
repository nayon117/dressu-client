
import { useEffect, useState } from "react";
import axiosSecure from "../../../api";
import toast from "react-hot-toast";


const TeacherReq = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosSecure.get("/teacher/pending-requests");
       
        setPendingRequests(data);
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };

    fetchData();
  }, []);

  const approveRequest = async(id) => {
    const {data} =  await axiosSecure.put(`/teacher/approve-request/${id}`)
    console.log(data);
    if (data.modifiedCount > 0) {
      toast.success('class approved successfully')
    }
      
  };
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Experience</th>
          <th>Title</th>
          <th>Category</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {pendingRequests?.map((request, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{request.name}</td>
            <td>{request.image}</td>
            <td>{request.experience}</td>
            <td>{request.title}</td>
            <td>{request.category}</td>
          
            <td>
              <button onClick={()=>approveRequest(request._id)}>{request.status}</button>
              
            </td>
            <td>Reject</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
export default TeacherReq;