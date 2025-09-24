import React, { useState } from "react";
import { FaBookQuran } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { allPaths } from "../../Route/paths";
import Button from "../../component/Button";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  // console.log(location);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const menus = [
    {
      path: allPaths.gallery,
      label: "Gallery",
    },
    {
      path: allPaths.about,
      label: "About",
    },
    {
      path: allPaths.contact,
      label: "Contact",
    },
    {
      path: allPaths.faq,
      label: "Faq",
    },
  ];

  return (
    <div
      data-aos="zoom-in"
      className="flex justify-between items-center px-5 md:px-10 py-3 md:py-5 bg-sky-500 text-white w-full fixed z-50 border-b border-sky-950"
    >
      <Link to={allPaths.home} className=" flex flex-col ">
        <span className="flex gap-2 items-center md:text-[2rem] font-semibold md:font-bold">
          <FaBookQuran />
          <h1>MARKAZ NUURUL BAYAN</h1>
        </span>
        <p className="hidden md:block md:!self-end md:font-bold w-[65%] md:w-full ">
          مـدرســـة مركــز نـــور البيــان لتعلــيــم العـربيــة و الإســلاميــة
        </p>
        <p className="self-start md:hidden">مـدرســـة مركــز نـــور البيــان</p>
      </Link>
      <div className="flex gap-3 md:gap-8 items-center">
        <span className="hidden md:flex gap-6 items-center font-semibold ">
          {location.pathname !== allPaths.home && (
            <Link to={allPaths.home}>Home</Link>
          )}
          {menus.map((menu, i) => (
            <Link key={i} to={menu.path}>
              {menu.label}
            </Link>
          ))}
        </span>
        {showMenu ? (
          <MdCancel onClick={handleShowMenu} className="block md:hidden" />
        ) : (
          <GiHamburgerMenu
            onClick={handleShowMenu}
            className="block md:hidden"
          />
        )}
      </div>

      {/* Mobile Screen */}
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
              className="px-4 py-2 text-sky-600 hover:bg-sky-50 hover:text-sky-700 transition rounded-md "
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
