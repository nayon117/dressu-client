import { Rating } from "@smastrom/react-rating";

const ReviewCard = ({ review }) => {
  const { name, description, rating } = review || {};
  return (
    <div>
      <h2>{description}</h2>
      <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
      <h2>{name}</h2>
    </div>
  );
};
export default ReviewCard;
