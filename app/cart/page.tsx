'use client';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Gradient Graphic T-shirt', size: 'Large', color: 'White', price: 145, quantity: 1, image: 'images/graphic.png' },
    { id: 2, name: 'Checkered Shirt', size: 'Medium', color: 'Red', price: 180, quantity: 2, image: 'images/check.png' },
    { id: 3, name: 'Skinny Fit Jeans', size: 'Large', color: 'Blue', price: 240, quantity: 1, image: 'images/jjj.png' },
  ]);

  const updateQuantity = (id: number, increment: number): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const removeItem = (id: number): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="text-gray-500 text-sm mb-6">
          <a href="/" className="hover:underline">Home</a> {'>'} <span className="text-black font-bold">Cart</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold mb-10">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="lg:w-3/5 bg-white p-4 sm:p-6 rounded-2xl shadow border border-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4 border-b last:border-b-0 border-gray-200">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-md overflow-hidden">
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-gray-500">Color: {item.color}</p>
                  <p className="text-lg font-bold mt-2">${item.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-gray-100 rounded-full p-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-lg font-semibold px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium mx-2 sm:mx-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-lg font-semibold px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Right Section (Order Summary) */}
          <div className="lg:w-2/5 bg-white p-4 sm:p-6 rounded-2xl shadow border border-gray-200">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500">Discount (-20%)</span>
              <span className="text-red-500 font-medium">-$113</span>
            </div>
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-medium">$10</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0) - 113 + 10}</span>
            </div>

            <div className="mt-6">
              <input
                type="text"
                placeholder="Add Promo Code"
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <button className="w-full bg-black text-white py-3 mt-4 rounded-xl hover:bg-gray-800">
                Apply Promo Code
              </button>
            </div>

            <button className="w-full bg-black text-white py-4 mt-6 rounded-xl text-lg font-bold hover:bg-gray-800">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
