import Banner from "../../components/Banner";
import BecomeTeacher from "../../components/BecomeTeacher";
import Faq from "../../components/Faq";
import Partner from "../../components/Partner";
import ReviewSec from "../../components/ReviewSec";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <Partner />
      <ReviewSec />
      <Stats />
      <BecomeTeacher />
      <Faq/>
    </div>
  );
};
export default Home;
