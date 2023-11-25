import Banner from "../../components/Banner";
import BecomeTeacher from "../../components/BecomeTeacher";
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
      <BecomeTeacher/>
    </div>
  );
};
export default Home;
