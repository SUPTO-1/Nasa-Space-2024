import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Share/Navbar";
import Footer from "../Share/Footer";


const Root = () => {

    const location = useLocation();
    const noNavFooter = location.pathname.includes('explorespace');

    return (
        <div>
            { noNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;

{/* <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div> */}