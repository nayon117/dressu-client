/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";

const TeacherRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  if (role === "teacher") return children;
  return <Navigate to="/dashboard"  />;
};
export default TeacherRoute;