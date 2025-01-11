import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Nike.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenu() {
        setMenuOpen((prev) => !prev);
    }

    return (
        <nav>
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Nike logo" className="h-12 w-70" />
                        </Link>
                    </div>

                    {/* Navbar Links for Medium and Larger Screens */}
                    <div className="hidden md:flex justify-center items-center w-full">
                        <ul className="flex gap-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `font-medium text-lg ${isActive ? "text-red-600" : "text-black"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `font-medium text-lg ${isActive ? "text-red-600" : "text-black"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `font-medium text-lg ${isActive ? "text-red-600" : "text-black"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Login Button and Menu Button for Small Screens */}
                    <div className="flex items-center ml-auto md:hidden gap-2">
                        <Link
                            to="#"
                            className="text-white bg-red-700 hover:bg-red-900 focus:ring-2 focus:ring-red-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Log in
                        </Link>

                        <button onClick={handleMenu} className="mr-4">
                            <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
                        </button>
                    </div>

                    {/* Login Button on Medium and Larger Screens */}
                    <div className="hidden md:flex items-center ml-auto">
                        <Link
                            to="#"
                            className="text-white bg-red-700 hover:bg-red-900 focus:ring-2 focus:ring-red-500 font-medium rounded-lg text-base px-4 py-2 focus:outline-none whitespace-nowrap"
                        >
                            Log in
                        </Link>
                    </div>
                </div>

                {/* Dropdown Menu for Small Screens */}
                {menuOpen && (
                    <div className="absolute top-15 right-4 bg-gray-100 shadow-lg rounded-lg p-4 w-48">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `font-medium text-lg ${isActive ? "text-red-600" : "text-black"}`
                                    }
                                    onClick={handleMenu} // Close menu on link click
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `font-medium text-lg ${isActive ? "text-red-600" : "text-black"}`
                                    }
                                    onClick={handleMenu} // Close menu on link click
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `font-medium text-lg ${isActive ? "text-red-600" : "text-black"}`
                                    }
                                    onClick={handleMenu} // Close menu on link click
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
