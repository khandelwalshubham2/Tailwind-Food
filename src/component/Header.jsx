import { FaMoon } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useState } from "react";
const Header = ({ goToSection }) => {
  const navLink = ["Home", "About Us", "Menu", "Review"];
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const toogleTheme = () => {
    const html = document.querySelector("html");
    if (!darkMode) {
      html.classList.add("dark");
      setDarkMode(true);
    } else {
      html.classList.remove("dark");
      setDarkMode(false);
    }
  };
  return (
    <header className="bg-primaryColor fixed top-0 left-0 z-10 w-full dark:bg-darkColor dark:border-b-2 dark:border-secondaryColor">
      <nav className="container relative flex justify-between items-center h-14 mx-auto">
        <div className="text-2xl">
          <span>BURGER</span>
        </div>
        <div
          className={`absolute w-full top-0 left-0 bg-primaryColor border-b border-secondaryColor py-4 dark:bg-darkColor ${
            !showNavMenu ? "hidden" : ""
          } md:static md:block md:p-0 md:border-0 md:w-auto md:ml-auto`}
        >
          <ul className="text-center flex flex-col gap-y-4 md:flex-row md:gap-x-2">
            {navLink.map((link) => (
              <li key={link}>
                <a
                  onClick={() => {
                    setActiveLink(link);
                    goToSection(link);
                    setShowNavMenu(false);
                  }}
                  className={`hover:text-secondaryColor cursor-pointer text-xl ${
                    activeLink.toLowerCase() === link.toLowerCase() &&
                    "active-header-link"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <IoMdClose
            className="absolute top-4 right-4 text-xl cursor-pointer md:hidden"
            onClick={() => {
              setShowNavMenu(false);
            }}
          ></IoMdClose>
        </div>
        <div className="text-2xl flex gap-x-2">
          {darkMode ? (
            <MdOutlineWbSunny
              className="cursor-pointer ml-4"
              onClick={toogleTheme}
            ></MdOutlineWbSunny>
          ) : (
            <FaMoon
              className="cursor-pointer ml-4"
              onClick={toogleTheme}
            ></FaMoon>
          )}
          <RxHamburgerMenu
            className="cursor-pointer md:hidden"
            onClick={() => {
              setShowNavMenu(true);
            }}
          ></RxHamburgerMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
