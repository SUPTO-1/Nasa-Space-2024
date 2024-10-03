import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const Navbar = <>
        <NavLink to='/' className={({ isActive }) => isActive ? "border-[#ff5d34] border text-[#ff5d34]" : "text-white"}>Home</NavLink>
        <NavLink to='/explorespace' className={({ isActive }) => isActive ? "border-[#ff5d34] border text-[#ff5d34]" : "text-white"}>Explore Space</NavLink>
        <NavLink to='/comparison' className={({ isActive }) => isActive ? "border-[#ff5d34] border text-[#ff5d34]" : "text-white"}>Comparison</NavLink>
        <NavLink to='/game' className={({ isActive }) => isActive ? "border-[#ff5d34] border text-[#ff5d34]" : "text-white"}>Game</NavLink>
        <NavLink to='/eventalert' className={({ isActive }) => isActive ? "border-[#ff5d34] border text-[#ff5d34]" : "text-white"}>Event Alert</NavLink>
        
    </>


    const Information = <>
        <Link to='/login' className="mr-3 hover:text-[#ff5d34]">Log In</Link>
        <Link to='/register' className="hover:text-[#ff5d34]">Register</Link>
    </>

    return (
        <div className="bg-black text-white">
            <div className="lg:w-11/12 mx-auto font-blackOp bg-black text-white">
                <div className="navbar">
                    <div className="navbar-start relative">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute z-10">
                                {Navbar}
                            </ul>
                        </div>
                        <h1 className="text-5xl font-semibold font-blackOp">Astro</h1>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg gap-4">
                            {Navbar}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3 item-center">
                        
                        {/* <div className=" relative">
                                    <details className="dropdown dropdown-end">
                                        <summary className="m-1 btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent">
                                            <div className="w-10 rounded-full tooltip" >
                                                <img className="w-10 h-10 rounded-full" src={ "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                            </div>
                                        </summary>
                                        <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-32  md:text-lg absolute z-10">
                                            <li className="hover:text-[#34ffdd]"><Link to={'/profile'}>Profile</Link></li>
                                            <li className="hover:text-[#34ffdd]" ><Link>Logout</Link></li>
                                        </ul>
                                    </details>

                                </div> */}

                        <div className="mr-4">
                            {
                                Information
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;