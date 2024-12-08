"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { animateOut } from "@/utils/animates";

const Button = ({
  isBlack,
  title,
  customClass,
  href,
  children,
  isImage,
}: {
  isBlack?: boolean;
  title?: string;
  customClass?: string;
  href: string;
  children?: React.ReactNode;
  isImage?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animateOut(href, router);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isBlack ? "bg-black text-white" : "bg-white text-black"
      } px-12 py-4 rounded-full w-full lg:w-fit border border-black ${customClass}`}
    >
      {isImage ? children : title}
    </button>
  );
};

export default Button;
