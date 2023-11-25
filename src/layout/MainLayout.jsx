import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Shared/Container";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>

      <Container>
        <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default MainLayout;
