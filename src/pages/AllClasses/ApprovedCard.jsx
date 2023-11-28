import { Link } from "react-router-dom";

const ApprovedCard = ({ approved }) => {
     const {_id,title,image ,name,price,details} = approved || {}
  return (
    <div className="card card-compact mt-16 bg-base-100 shadow-xl">
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
         <Link to={`/details/${_id}`}> <button className="btn bg-[#332883] text-white">Enroll Now</button></Link>
        </div>
      </div>
    </div>
  );
};
export default ApprovedCard;
