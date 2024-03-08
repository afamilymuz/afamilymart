"use client";
import React, { useState } from "react";
import logo from "../../public/assets/afm.png";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <nav className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto text-black">
      <h1 className="w-full text-3xl font-bold flex flex-row items-center gap-5">
        <Image src={logo} alt="logo" className="h-10 w-10" />A{" "}
        <span className="text-red-500">Family</span> Mart
      </h1>
      <div onClick={handleNav} className="block">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-fill md:w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700"
            : "ease-in-out w-full md:w-[40%] duration-900 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl duration-300 cursor-pointer text-white border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
