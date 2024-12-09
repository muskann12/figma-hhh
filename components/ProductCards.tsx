"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React from "react";
import { BsStarFill } from "react-icons/bs";

interface ProductCardsProps {
  imgSrc: string;
  title: string;
  price: number;
}

const ProductCards = ({ imgSrc, title, price }: ProductCardsProps) => {
  const router = useRouter();
  return (
    <div
      className="h-[444px] min-w-[296px] space-y-1"
      onClick={() => router.push("/productpage")}
    >
      <div className="h-3/4 w-full bg-[#f2f0f1] overflow-hidden rounded-[30px] cursor-pointer flex items-center justify-center">
        <img src={imgSrc} alt={title} className="object-cover" />
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        <BsStarFill className="text-[#FFC633]" />
        <BsStarFill className="text-[#FFC633]" />
        <BsStarFill className="text-[#FFC633]" />
        <BsStarFill className="text-[#FFC633]" />
        <h1>5/5</h1>
      </div>
      <h1 className="font-bold">${price}</h1>
    </div>
  );
};

export default ProductCards;
