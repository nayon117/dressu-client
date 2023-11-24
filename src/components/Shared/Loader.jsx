/* eslint-disable react/prop-types */
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CircleLoader color="#2828bf" size={150} />
    </div>
  );
};

export default Loader;
