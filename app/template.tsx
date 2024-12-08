/* eslint-disable @next/next/no-img-element */
"use client";
import { Montserrat } from "next/font/google";

import { animateIn } from "@/utils/animates";
import React, { useEffect } from "react";

const mont = Montserrat({weight: "900", subsets: ["latin"] });

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    animateIn();
  }, []);

  return (
    <div>
      <div
        id="banner"
        className="min-h-screen bg-black z-50 fixed top-0 left-0 w-full flex items-center justify-center"
      >
        <h1 className={`text-6xl font-extrabold text-white ${mont.className}`}>
          SHOP.CO
        </h1>
      </div>
      {children}
    </div>
  );
};

export default Template;
