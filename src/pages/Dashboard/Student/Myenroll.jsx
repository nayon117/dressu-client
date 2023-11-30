import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyenrollCard from "./MyenrollCard";

const Myenroll = () => {
  const { user } = useAuth() || {};
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    fetch(
      `https://skillify-server-nine.vercel.app/bookings?stEmail=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setEnrolls(data));
  }, [user?.email]);
  console.log(enrolls);
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center font-bold mt-12">
          Enrolled Courses
        </h2>
      </div>
      {enrolls.length === 0 ? (
        <p className="flex items-center justify-center min-h-[65vh] text-2xl font-bold">
          You have not enrolled any course yet
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-12">
          {enrolls?.map((enroll) => (
            <MyenrollCard key={enroll._id} enroll={enroll}></MyenrollCard>
          ))}
        </div>
      )}
    </div>
  );
};
export default Myenroll;
