import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import Footer from "./Footer";

export default function Container() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
