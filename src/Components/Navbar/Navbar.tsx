"use client";
import React, { useState, useEffect } from "react";
import LinkList from "./LinkList";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  const [scroll, setScroll] = useState(0);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav
        className={`flex w-4/5 justify-between py-4  mx-auto items-center transform-gpu duration-300 ${
          scroll > 0 ? " h-20" : " h-24"
        } `}
      >
        <h1 className="text-2xl font-bold uppercase">Tibis</h1>
        <LinkList />
      </nav>
    </header>
  );
};

export default Navbar;
