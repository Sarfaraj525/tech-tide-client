import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
// import Footer from "../pages/Shared/Footer/Footer";
// import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;