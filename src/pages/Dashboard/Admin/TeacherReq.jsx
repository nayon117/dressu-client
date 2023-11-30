
import { useEffect, useState } from "react";
import axiosSecure from "../../../api";
import toast from "react-hot-toast";
 


const TeacherReq = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  
  
 
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await axiosSecure.get("/teacher/pending-requests");
        const { data } = response;
        setPendingRequests(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
        // Handle fetch errors
      }
    };

    fetchPendingRequests();
  }, []);

  const approveRequest = async (id) => {
    try {
      const { data } = await axiosSecure.put(`/teacher/approve-request/${id}`);
      if (data.message === "Request approved, user role updated to teacher") {
        toast.success("Teacher request approved successfully");
        
        const updatedRequests = pendingRequests.map((request) =>
          request._id === id ? { ...request, status: "approved" } : request
        );
        setPendingRequests(updatedRequests);
      }
    } catch (error) {
      console.error("Error approving request:", error);
      toast.error("Failed to approve teacher request");
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
              <button className="btn btn-xs bg-[#332883] text-white" onClick={()=>approveRequest(request._id)} >
                
               {request?.status}

              </button>
              
            </td>
           
           
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};
export default TeacherReq;