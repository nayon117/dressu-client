import { Link } from "react-router-dom";

const Card = ({ item }) => {

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      className="card card-compact mt-16 shadow-xl"
    >
      <figure>
        <img src={item?.image} alt="course image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <h2 className="card-title">{item?.brand}</h2>
        <h2 className="card-title">price:$ {item?.price}</h2>
        <p>{item?.short_details}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${item?._id}`}>
            {" "}
            <button
              data-tip="enroll"
              className="btn tooltip bg-first text-white  hover:bg-white hover:text-first"
            >
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
