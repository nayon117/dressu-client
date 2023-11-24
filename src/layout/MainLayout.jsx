import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Container from "../components/Shared/Container";

const MainLayout = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>

      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default MainLayout;
