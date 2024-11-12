import React, { useState } from 'react';
import { MdHome, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex items-center justify-between py-6 px-4 lg:px-8 ">
      <div className="flex items-center text-4xl">
        <MdHome />
        <p className="font-semibold mx-3 text-2xl">HomeHarmony</p>
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </div>

      <div className="hidden md:flex items-center gap-4 text-xl lg:gap-12">
        <p>Upload</p>
        <p>Model</p>
        <p>Settings</p>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-[#1A1A1A] shadow-lg z-10 flex flex-col items-start py-4 px-8">
          <p className="py-2 text-xl" onClick={toggleMenu}>Upload</p>
          <p className="py-2 text-xl" onClick={toggleMenu}>Model</p>
          <p className="py-2 text-xl" onClick={toggleMenu}>Settings</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
