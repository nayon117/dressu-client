import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../api/useAxiosPublic";
import { useRef, useState } from "react";
 
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";

const MyenrollDetails = () => {
  const [rating, setRating] = useState(0);
  const axiosPublic = useAxiosPublic();
  const dialogRef = useRef(null);
  const { user } = useAuth();

  const { data: assignments = [] } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const res = await axiosPublic("/assignments");
      return res.data;
    },
  });

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;

    const description = form.description.value;

    const reviewData = {
      name,
      rating,
      description,
    };

      const res = await axiosPublic.post("/reviews", reviewData)
      if (res.data && res.data.acknowledged === true) {
        toast.success("Successfully sent feedback");
      } else {
        toast.error("Failed to send feedback");
      }

    dialogRef.current.close();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {assignments?.map((assign, index) => (
              <tr key={assign._id}>
                <th>{index + 1}</th>
                <td>{assign.title}</td>
                <td>{assign.deadline}</td>
                <td>{assign.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <button
          className="btn bg-[#332883] text-white hover:bg-white hover:text-[#332883]  "
          onClick={() => dialogRef.current.showModal()}
        >
          Create
        </button>
        <dialog id="my_modal_1" className="modal" ref={dialogRef}>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Review Form</h3>
            <form method="dialog" onSubmit={handleSubmit} className="space-y-4">
              <label className="font-medium">Review: </label>
              <Rating
                style={{ maxWidth: 180 }}
                onChange={handleRatingChange}
                value={rating}
              />

              <br />
              <label className="font-medium">Description: </label>
              <input
                className="font-medium border border-black px-2 rounded-md"
                type="text"
                name="description"
              />

              <button
                type="submit"
                className="btn bg-[#332883] text-white hover:bg-white hover:text-[#332883] block mx-auto  "
              >
                send feedback
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};
export default MyenrollDetails;
