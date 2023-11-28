import Banner from "../../components/Banner";
import BecomeTeacher from "../../components/BecomeTeacher";
import Faq from "../../components/Faq";
import NewsLetter from "../../components/NewsLetter";
import Partner from "../../components/Partner";
import Recommend from "../../components/Recommend";
import ReviewSec from "../../components/ReviewSec";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <Partner />
      <Recommend/>
      <ReviewSec />
      <Stats />
      <BecomeTeacher />
      <Faq />
      <NewsLetter />
    </div>
  );
};
export default Home;
