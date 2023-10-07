import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png"



const Header = () => {

    

    return (
        <div>
           <div className="container mx-auto mt-10">
            <nav className="flex items-center gap-5 justify-between">
                <div>
                 <img className="w-52 h-14" src={logo} alt="" />
                </div>

                {/* This is banner text */}
                <div className="flex ">
                <ul className="flex gap-5 md:gap-10 lg:gap-12">
                    <li>
                        <NavLink
                            to="/" style={{fontWeight:"bold",fontSize:"25px"}}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }
                        >
                         Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login" style={{fontWeight:"bold",fontSize:"25px"}}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }
                        >
                         Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/register" style={{fontWeight:"bold",fontSize:"25px"}}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600 underline" : ""
                            }
                        >
                         Register
                        </NavLink>
                    </li>
                </ul>
                
                </div>
                <div>
                    <button className="bg-green-600 text-gray-200 font-bold text-2xl px-5 py-3 rounded-xl">Sign In</button>
                </div>
            </nav>
            
        </div>

       
        </div>
    );
};

export default Header;