"use client";
import { useState } from "react";
import { HamburgerSVG, CloseSVG, DownloadSVG, NavbarSVG } from "../assets";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Link from "next/link";

export const Navbar = () => {
  const { isMobile } = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 lg:px-[3rem] py-4 bg-white text-black z-50">
      <a href="/" className="flex items-center justify-center">
        <span className="mb-2">
          <NavbarSVG />
        </span>
        <span className="text-lg font-bold ml-2">AalanDEV</span>
      </a>
      {isMobile ? (
        <div className="flex right-0" onClick={toggleMenu}>
          {isMenuOpen ? <CloseSVG /> : <HamburgerSVG />}
        </div>
      ) : (
        <ul className="flex justify-center flex-1">
          <li className="px-6 font-bold">
            <Link href="/">About Me</Link>
          </li>
          <li className="px-6 font-bold">
            <Link href="/">Skills</Link>
          </li>
          <li className="px-6 font-bold">
            <Link href="/">Project</Link>
          </li>
          <li className="px-6 font-bold">
            <Link href="/">Contact Me</Link>
          </li>
        </ul>
      )}
      {!isMobile && (
        <div>
          <button className="flex bg-black hover:bg-[#404040] text-white font-bold py-2 px-5 rounded mr-3 mt-1 active:bg-[#2e2e2e]">
            Resume{" "}
            <span className="ml-2 mt-0.5">
              <DownloadSVG />
            </span>
          </button>
        </div>
      )}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="absolute top-4 right-4" onClick={toggleMenu}>
            <CloseSVG />
          </div>
          <ul className="w-full text-center mt-10">
            <li className="py-4 font-bold">
              <Link href="/" onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li className="py-4 font-bold">
              <Link href="/" onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li className="py-4 font-bold">
              <Link href="/" onClick={toggleMenu}>
                Project
              </Link>
            </li>
            <li className="py-4 font-bold">
              <Link href="/" onClick={toggleMenu}>
                Contact Me
              </Link>
            </li>
            <li className="py-4">
              <button className="bg-black hover:bg-[#404040] text-white font-bold py-2 px-4 rounded active:bg-white active:text-black">
                <span className="flex items-center justify-center">
                  <p className="mr-2">Resume</p>
                  <DownloadSVG />
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
