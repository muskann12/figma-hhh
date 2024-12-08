/* eslint-disable @next/next/no-img-element */
import Button from "@/components/ui/Button";
import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className="container mx-auto">
        <h1 className="mt-12 text-xl font-bold md:text-2xl lg:text-4xl">
          YOUR CART
        </h1>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row w-full">
          <div className="h-full lg:w-[60%] border border-black/10 rounded-[30px]">
            <div className="w-full p-5 flex gap-2 items-center">
              <img
                src="/images/graphic.png"
                alt=""
                className="h-32 w-32 object-cover"
              />
              <div className="w-full">
                <div className="w-full flex items-center justify-between">
                  <h1 className="font-bold">Gradient Graphic T-shirt</h1>
                  <h1>❌</h1>
                </div>
                <p className="text-sm">Size: Large</p>
                <p className="text-sm">Color: White</p>
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-xl font-bold">$145</h1>
                  <div className="h-12 w-48 px-6 bg-[#f2f0f1] flex items-center justify-between rounded-[30px] cursor-pointer">
                    <h1 className="text-2xl font-bold cursor-pointer">-</h1>
                    <h1 className="text-2xl font-bold">1</h1>
                    <h1 className="text-2xl font-bold cursor-pointer">+</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 flex gap-2 items-center border-t border-black/10 border-b">
              <img
                src="/images/pant.png"
                alt=""
                className="h-32 w-32 object-cover"
              />
              <div className="w-full">
                <div className="w-full flex items-center justify-between">
                  <h1 className="font-bold">Skinny Fit Jeans</h1>
                  <h1>❌</h1>
                </div>
                <p className="text-sm">Size: Large</p>
                <p className="text-sm">Color: blue</p>
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-xl font-bold">$145</h1>
                  <div className="w-48 h-12 px-6 bg-[#f2f0f1] flex items-center justify-between rounded-[30px] cursor-pointer">
                    <h1 className="text-2xl font-bold cursor-pointer">-</h1>
                    <h1 className="text-2xl font-bold">1</h1>
                    <h1 className="text-2xl font-bold cursor-pointer">+</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 flex gap-2 items-center">
              <img
                src="/images/checks.png"
                alt=""
                className="h-32 w-32 object-cover"
              />
              <div className="w-full">
                <div className="w-full flex items-center justify-between">
                  <h1 className="font-bold">Checkered Shirt</h1>
                  <h1>❌</h1>
                </div>
                <p className="text-sm">Size: Medium</p>
                <p className="text-sm">Color: Red</p>
                <div className="w-full flex items-center justify-between">
                  <h1 className="text-xl font-bold">$180</h1>
                  <div className="w-48 h-12 px-6 bg-[#f2f0f1] flex items-center justify-between rounded-[30px] cursor-pointer">
                    <h1 className="text-2xl font-bold cursor-pointer">-</h1>
                    <h1 className="text-2xl font-bold">1</h1>
                    <h1 className="text-2xl font-bold cursor-pointer">+</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-fit lg:w-[40%] rounded-[30px] border border-black/10 p-5">
            <h1 className="text-xl font-bold ">Order Summary</h1>
            <div className="flex flex-col gap-2 mt-4">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-black/50 text-xl">Subtotal</h1>
                <h1 className="text-black text-xl">$565</h1>
              </div>
              <div className="w-full flex items-center justify-between">
                <h1 className="text-black/50 text-xl">Discount (-20%)</h1>
                <h1 className="text-red-500 text-xl">-$113</h1>
              </div>
              <div className="w-full flex items-center justify-between border-b border-black/10 pb-8">
                <h1 className="text-black/50 text-xl">Delivery Fee</h1>
                <h1 className="text-black text-xl">$467</h1>
              </div>
              <div className="w-full flex items-center justify-between">
                <h1 className="text-black/50 text-xl">Total</h1>
                <h1 className="text-black text-xl">-$467</h1>
              </div>
              <div>
                <div className="flex items-center gap-2 mt-4">
                  <input
                    type="text"
                    className="bg-transparent border border-black/10 rounded-[30px] h-12 px-2 w-full"
                    placeholder="ADD PROMO CODE"
                  />
                  <Button title="Apply" isBlack href="/" />
                </div>
                <div className="w-full mt-2">
                  <Button href="/"
                    title="Go To Checkout  -->"
                    isBlack
                    customClass="!w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
