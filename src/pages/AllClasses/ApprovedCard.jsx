const ApprovedCard = ({ approved }) => {
     const {title,image ,name,price,details} = approved || {}
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Author: {name}</h2>
        <h2 className="card-title">price:$ {price}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};
export default ApprovedCard;
