import { Link } from "react-router-dom";

const ApprovedCard = ({ approved }) => {
     const {_id,title,image ,name,price,details} = approved || {}
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1500" className="card card-compact mt-16 shadow-xl">
      <figure>
        <img
          src={image}
          alt="course image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Author: {name}</h2>
        <h2 className="card-title">price:$ {price}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
         <Link to={`/details/${_id}`}> <button data-tip="enroll" className="btn tooltip bg-first text-white  hover:bg-white hover:text-first">Enroll Now</button></Link>
        </div>
      </div>
    </div>
  );
};
export default ApprovedCard;
