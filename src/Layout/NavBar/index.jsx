import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { allPaths } from "../../Route/paths";
import logo from "../../assets/Logo.jpg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const menus = [
    { path: allPaths.gallery, label: "Gallery" },
    { path: allPaths.about, label: "About" },
    { path: allPaths.contact, label: "Contact" },
    { path: allPaths.faq, label: "Faq" },
  ];

  return (
    <div
      data-aos="zoom-in"
      className="flex justify-between items-center px-5 md:px-10 py-3 md:py-5 bg-sky-500/80 backdrop-blur-md text-white w-full fixed z-50 border-b border-sky-950"
    >
      {/* Logo + Title */}
      <Link to={allPaths.home} className="flex gap-3 items-center">
        {/* Logo */}
        <img
          className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
          src={logo}
          alt="madrasah logo"
        />

        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold hidden md:block">
            MARKAZ NUURIL BAYAN
          </span>
          <p className="hidden md:block font-bold text-sm md:text-base lg:text-lg">
            مركــز نـــور البيــان للتعلــيــم العـربي و الإســلامي
          </p>

          <p className="text-xs md:text-sm md:hidden font-medium tracking-wide">
            MARKAZ NUURIL BAYAN
          </p>

          <p className="md:hidden text-sm font-semibold">
            مركــز نـــور البيــان
          </p>
        </div>
      </Link>

      {/* Desktop Links + Hamburger */}
      <div className="flex gap-3 md:gap-8 items-center">
        {/* Desktop Menu */}
        <span className="hidden md:flex gap-6 items-center font-semibold">
          {location.pathname !== allPaths.home && (
            <Link to={allPaths.home}>Home</Link>
          )}
          {menus.map((menu, i) => (
            <Link key={i} to={menu.path}>
              {menu.label}
            </Link>
          ))}
        </span>

        {/* Mobile Menu Button */}
        {showMenu ? (
          <MdCancel
            onClick={handleShowMenu}
            className="block md:hidden cursor-pointer"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleShowMenu}
            className="block md:hidden cursor-pointer"
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="absolute right-2 top-[4rem] w-48 bg-white shadow-lg rounded-xl border border-sky-200 flex flex-col py-3 md:hidden animate-fadeIn">
          {location.pathname !== allPaths.home && (
            <Link
              to={allPaths.home}
              className="px-4 py-2 text-sky-600 hover:bg-sky-50 hover:text-sky-700 transition rounded-md"
              onClick={() => setShowMenu(false)}
            >
              Home
            </Link>
          )}
          {menus.map((menu, i) => (
            <Link
              key={i}
              to={menu.path}
              className="px-4 py-2 text-sky-600 hover:bg-sky-50 hover:text-sky-700 transition rounded-md"
              onClick={() => setShowMenu(false)}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
