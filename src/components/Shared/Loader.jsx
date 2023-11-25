import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <CircleLoader color="#2828bf" size={250} />
    </div>
  );
};

export default Loader;
