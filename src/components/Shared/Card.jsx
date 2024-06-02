import { Link } from "react-router-dom";

const Card = ({ item }) => {

  return (
    <Link to={`/details/${item?._id}`}>
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      className="card card-compact mt-16 shadow-xl bg-third"
    >
      <figure>
        <img src={item?.image} alt="product image" className="h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
       <div className="flex items-center justify-between">
       <h2 className="text-base font-semibold">brand: {item?.brand}</h2>
        <h2 className="text-base font-semibold">${item?.price}</h2>
       </div>
        <p className="text-lg font-medium">{item?.short_details}</p>
       
      </div>
    </div>
    </Link>
  );
};
export default Card;
