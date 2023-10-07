import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png"


const Header = () => {

    

    return (
        <div>
           <div className="container mx-auto mt-10">
            <nav className="flex items-center gap-5 justify-between">
                <div>
                 <img src={logo} alt="" />
                </div>

                {/* This is banner text */}
                <div className="flex ">
                <ul className="flex gap-5 md:gap-10 lg:gap-12">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                         Register
                        </NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        </div>

        
        </div>
    );
};

export default Header;