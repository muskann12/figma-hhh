
'use client'
import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";

const Cart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  // Update state once component is mounted on the client
  }, []);

  // Don't render the component until mounted on the client
  if (!mounted) {
    return null; // Or you can return a loading spinner if you want
  }

  return (
    <div className="min-h-screen w-screen">
      <div className="container mx-auto">
        <h1 className="mt-12 text-xl font-bold md:text-2xl lg:text-4xl">
          YOUR CART
        </h1>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row w-full">
          <div className="h-full lg:w-[60%] border border-black/10 rounded-[30px]">
            {/* Render Cart Items Here */}
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
