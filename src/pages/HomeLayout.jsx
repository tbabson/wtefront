import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};
export default HomeLayout;
