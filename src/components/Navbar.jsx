import React from "react";
import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#card",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center gap-4">
          <div className="">
            <a
              href="#"
              className="font-bold text-2xl sm:text-2xl flex justify-center items-center gap-2 tracking-wider font-gupter"
            >
              <img src={Logo} alt="Logo" srcset="" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block px-4 py-4 text-lg sm:text-lg font-gupter font-bold hover:text-orange-600 transition"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              <li></li>
            </ul>
            <button className="bg-primary/70 px-5 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
