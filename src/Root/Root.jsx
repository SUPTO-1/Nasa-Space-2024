import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";


const Root = () => {

    const location = useLocation();
    const noNavFooter = location.pathname.includes('explorespace');

    return (
        <>
            { noNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNavFooter || <Footer></Footer>}
        </>
    );
};

export default Root;