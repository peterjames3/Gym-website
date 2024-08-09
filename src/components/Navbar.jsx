import  { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import { CgGym } from "react-icons/cg";
import { tabs } from "../tabs.js";


const Navbar = () => {
  // Component declaration was commented out
  const [nav, setNav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleNav = () => setNav(!nav);
  const closeMenu = () => {
    setNav(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const activeStyle = {
    color: "#f34c38",
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b-2 border-primary ${isVisible ? "bg-[#060606]" : "bg-transparent"} px-4 py-3`}
    >
      <div className="px-4 text-white">
        <p className="text-center text-sm font-medium underline">
          Gym kits coming soon!
        </p>
      </div>

      <div className="mx-auto flex w-full items-center justify-between md:max-w-[1400px]">
        {nav && (
          <div className="fixed left-0 top-0 z-50 h-full min-h-screen w-full bg-black bg-opacity-70"></div>
        )}

        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            /*  smooth={true} */
            className="flex items-center gap-2 text-3xl font-bold hover:cursor-pointer"
            onClick={closeMenu}
          >
            <CgGym className="size-10 text-5xl text-primary" />
            <nav className="hidden font-bold text-white md:flex">Gym</nav>
          </NavLink>
        </nav>

        {/* Desktop Navigation */}
        <nav className={`hidden items-center gap-7 sm:flex`}>
          {tabs.map((tab, index) => (
            <NavLink
              key={index}
              to={tab.id}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              /*  smooth={true}
              spy={true}
              activeClass="active" */
              className="cursor-pointer text-xl font-medium text-white transition-all delay-300 ease-out hover:text-textColor"
              onClick={closeMenu}
            >
              {tab.name}
            </NavLink>
          ))}
          <Link
            to="contact"
            /* smooth={true}
             */ className="cursor-pointer rounded-md border border-primary bg-primary px-6 py-3 text-xl font-medium text-white transition-all delay-300 hover:border hover:bg-transparent hover:text-primary"
            onClick={closeMenu}
          >
            Join us
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div
          onClick={handleNav}
          className="cursor-pointer text-white transition-all delay-300 hover:text-green-700 sm:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <nav className="fixed left-0 top-0 z-50 h-full w-[60%] border-r border-r-gray-900 bg-black duration-500 ease-in-out">
            <NavLink
              to="home"
              smooth={true}
              className="flex items-center gap-2 px-4 pt-[1.8rem] text-2xl font-medium text-[#00df9a] transition-all delay-300 ease-out hover:cursor-pointer"
              onClick={closeMenu}
            >
              <CgGym className="size-10 text-5xl text-primary" />
              <nav className="font-bold text-white">Gym</nav>
            </NavLink>
            <ul className="flex flex-col space-y-10 px-4 pt-10 font-normal">
              {tabs.map((tab, index) => (
                <NavLink
                  key={index}
                  to={tab.id}
                  /* smooth={true}
                  spy={true}
                   */ className="cursor-pointer font-medium text-slate-500 transition-all delay-300 ease-out hover:text-white"
                  onClick={closeMenu}
                >
                  {tab.name}
                </NavLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                className="cursor-pointer text-xl font-medium text-white transition-all delay-300"
                onClick={closeMenu}
              >
                Join us
              </ScrollLink>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
