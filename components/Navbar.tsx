/* eslint-disable @next/next/no-img-element */
"use client";
import { Navlinks } from "@/constants";
import React, { useState } from "react";
import { BiCart, BiSearch, BiUser, BiMenu, BiX } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 h-24 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <button
            className="lg:hidden text-2xl hover-scale"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <BiX /> : <BiMenu />}
          </button>
          <h1 className="font-bold text-xl cursor-pointer hover-scale">
            <Button href="/" isImage customClass="!border-none !p-0">
              <img src="/images/logo.png" alt="" />
            </Button>
          </h1>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex items-center gap-4"
        >
          {Navlinks.map((links, index) => (
            <motion.li
              key={links.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="py-2 px-4 hover:bg-gray-50 rounded-lg cursor-pointer hover-scale"
            >
              <Button
                href={links.link}
                title={links.name}
                customClass="!p-0 !border-none"
              >
                {links.name}
              </Button>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center max-w-md w-full mx-4 bg-[#f2f0f1] rounded-full"
        >
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border-none outline-none bg-transparent"
              placeholder="Search for products..."
            />
            <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <Button isImage href="/cart" customClass="!border-none !p-0">
              <BiCart className="text-2xl" />
            </Button>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2"
          >
            <BiUser className="text-2xl" />
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute left-0 w-full bg-white shadow-lg z-50"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-400"
                    placeholder="Search for products..."
                  />
                  <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                </div>
              </div>

              <ul className="space-y-2">
                {Navlinks.map((links) => (
                  <li
                    key={links.name}
                    className="py-2 px-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <Button href={links.link} isImage title={links.name}>
                      {links.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
