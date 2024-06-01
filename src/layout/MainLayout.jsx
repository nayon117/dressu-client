import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="section-container min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
