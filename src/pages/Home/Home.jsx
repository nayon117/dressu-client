import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import NewsLetter from "../../components/NewsLetter";
import Partner from "../../components/Partner";
import LatestProduct from "../../components/LatestProduct";
import ReviewSec from "../../components/ReviewSec";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestProduct />
      <Partner />
      <ReviewSec />
      <Faq />
      <NewsLetter />
    </div>
  );
};
export default Home;
