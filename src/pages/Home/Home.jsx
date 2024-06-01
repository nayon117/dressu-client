import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import NewsLetter from "../../components/NewsLetter";
import Partner from "../../components/Partner";
import Recommend from "../../components/Recommend";
import ReviewSec from "../../components/ReviewSec";

const Home = () => {
  return (
    <div>
      <Banner />
      <Recommend/>
      <Partner />
      <ReviewSec />
      <Faq />
      <NewsLetter />
    </div>
  );
};
export default Home;
