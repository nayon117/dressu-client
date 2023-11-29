import { useLoaderData } from "react-router-dom";
import EnrollCard from "./EnrollCard";
import {   useRef  } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MyClassDetails = () => {
  const enrollments = useLoaderData();
   
  const dialogRef = useRef(null);
  const axiosPublic = useAxiosPublic()

  const { data:assignmentCount=0,refetch } = useQuery({
    queryKey: ['assignmentCount'],
    queryFn: async () => {
      const res = await axiosPublic('/assignments-count')
      return res.data.count;
    }
  })
   

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const deadline = form.deadline.value;
    const description = form.description.value;

    const assignmentData = {
      title,
      deadline,
      description,
    };
 
    axios
      .post("http://localhost:5000/assignments", assignmentData)
      .then((res) => {
        console.log("Response data:", res.data);
        if (res.data.acknowledged === true) {
          toast.success("Assignment created successfully");
          refetch()
        } else {
          toast.error("Failed");
        }
      })
      .catch((err) => {
        console.error("Request error:", err);
      });

    dialogRef.current.close();
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="border p-4">
          <h3 className="text-lg text-center font-semibold mb-2">
            Total Enrollment
          </h3>
          {enrollments?.map((enroll) => (
            <EnrollCard key={enroll._id} enroll={enroll}></EnrollCard>
          ))}
        </div>
        <div className="border p-4">
          <h3 className="text-lg font-semibold mb-2">Total Assignments</h3>
          <p>{assignmentCount}</p>
        </div>
        <div className="border p-4">
          <h3 className="text-lg font-semibold mb-2">
            Per Day Assignments Submitted
          </h3>
          {/* <p>{assignmentsSubmittedToday}</p> */}
        </div>
      </div>

      <div className="mt-8">
        <button
          className="btn bg-[#332883] text-white hover:bg-white hover:text-[#332883]  "
          onClick={() => dialogRef.current.showModal()}
        >
          Create Assignment
        </button>
        <dialog id="my_modal_1" className="modal" ref={dialogRef}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Request Form</h3>
            <form method="dialog" onSubmit={handleSubmit} className="space-y-4">
              <label className="font-medium">Title: </label>
              <input
                className="font-medium border border-black px-2  rounded-md"
                type="text"
                name="title"
              />
              <br />

              <label className="font-medium">Deadline: </label>
              <input
                className="font-medium border border-black px-2  rounded-md"
                type="date"
                name="deadline"
              />
              <br />
              <label className="font-medium">Description: </label>
              <input
                className="font-medium border border-black px-2 rounded-md"
                type="text"
                name="description"
              />

              <button type="submit" className="btn bg-[#332883] text-white hover:bg-white hover:text-[#332883] block mx-auto  ">
                create
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyClassDetails;
