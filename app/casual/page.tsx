"use client";
import ProductCards from "@/components/ProductCards";
import React, { useState, useEffect } from "react";
import { BiChevronDown, BiFilter, BiX } from "react-icons/bi";

const Casual = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSection, setOpenSection] = useState("price");
  const [priceRange, setPriceRange] = useState(200);

  // Client-side check
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure component only renders on the client
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
  };

  if (!isClient) {
    return null; // Or a loading state
  }

  return (
    <div className="min-h-dvh w-full relative">
      <div className="container mx-auto px-4 lg:px-6">
        <h1 className="text-black/50 mt-12">
          {"Home > Shop >"} <span className="text-black">Casual</span>{" "}
        </h1>

        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="fixed bottom-4 right-4 z-50 lg:hidden bg-black text-white h-12 w-12 rounded-full flex items-center justify-center text-2xl"
        >
          {isFilterOpen ? <BiX /> : <BiFilter />}
        </button>

        <div className="flex gap-8 mt-12">
          <div
            className={`fixed lg:relative bottom-0 left-0 w-full lg:w-1/4 bg-white lg:bg-transparent z-40 transform transition-transform duration-300 ${
              isFilterOpen
                ? "translate-y-0"
                : "translate-y-full lg:translate-y-0"
            }`}
          >
            <div className="bg-white rounded-t-[30px] lg:rounded-[30px] p-6 border border-black/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button className="text-xl">
                  <BiFilter />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full text-left py-2 hover:text-black/70">
                  T-shirts
                </button>
                <button className="w-full text-left py-2 hover:text-black/70">
                  Shorts
                </button>
                <button className="w-full text-left py-2 hover:text-black/70">
                  Shirts
                </button>
                <button className="w-full text-left py-2 hover:text-black/70">
                  Hoodie
                </button>
                <button className="w-full text-left py-2 hover:text-black/70">
                  Jeans
                </button>
              </div>

              <div className="mb-6">
                <button
                  className="w-full flex items-center justify-between py-2"
                  onClick={() => toggleSection("price")}
                >
                  <span className="font-semibold">Price</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSection === "price" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "price" && (
                  <div className="mt-4">
                    <input
                      type="range"
                      min="50"
                      max="200"
                      value={priceRange}
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-sm">
                      <span>$50</span>
                      <span>$200</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <button
                  className="w-full flex items-center justify-between py-2"
                  onClick={() => toggleSection("colors")}
                >
                  <span className="font-semibold">Colors</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSection === "colors" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "colors" && (
                  <div className="grid grid-cols-5 gap-2 mt-4">
                    <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-yellow-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-orange-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-blue-600 cursor-pointer ring-2 ring-blue-600 ring-offset-2"></div>
                    <div className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-pink-500 cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-white border cursor-pointer"></div>
                    <div className="h-8 w-8 rounded-full bg-black cursor-pointer"></div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <button
                  className="w-full flex items-center justify-between py-2"
                  onClick={() => toggleSection("size")}
                >
                  <span className="font-semibold">Size</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSection === "size" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "size" && (
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      XX-Small
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      X-Small
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      Small
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      Medium
                    </button>
                    <button className="px-3 py-2 rounded-full bg-black text-white">
                      Large
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      X-Large
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      XX-Large
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      3X-Large
                    </button>
                    <button className="px-3 py-2 rounded-full bg-[#f2f0f1]">
                      4X-Large
                    </button>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <button
                  className="w-full flex items-center justify-between py-2"
                  onClick={() => toggleSection("style")}
                >
                  <span className="font-semibold">Dress Style</span>
                  <BiChevronDown
                    className={`transform transition-transform ${
                      openSection === "style" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSection === "style" && (
                  <div className="space-y-2 mt-4">
                    <button className="w-full text-left py-2 hover:text-black/70">
                      Casual
                    </button>
                    <button className="w-full text-left py-2 hover:text-black/70">
                      Formal
                    </button>
                    <button className="w-full text-left py-2 hover:text-black/70">
                      Party
                    </button>
                    <button className="w-full text-left py-2 hover:text-black/70">
                      Gym
                    </button>
                  </div>
                )}
              </div>

              <button className="w-full bg-black text-white rounded-full py-3 mt-6">
                Apply Filter
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Casual Wear</h2>
              <select className="bg-[#f2f0f1] px-4 py-2 rounded-full">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              <ProductCards
                title="Casual Blue T-Shirt"
                price={49.99}
                imgSrc="/images/blue.png"
              />
              <ProductCards
                title="Striped Casual Shirt"
                price={59.99}
                imgSrc="/images/bw.png"
              />
              <ProductCards
                title="Graphic Print Tee"
                price={39.99}
                imgSrc="/images/graphic.png"
              />
              <ProductCards
                title="Red Casual Polo"
                price={54.99}
                imgSrc="/images/red.png"
              />
              <ProductCards
                title="Casual Blue T-Shirt"
                price={49.99}
                imgSrc="/images/blue.png"
              />
              <ProductCards
                title="Striped Casual Shirt"
                price={59.99}
                imgSrc="/images/bw.png"
              />
              <ProductCards
                title="Striped Casual Shirt"
                price={59.99}
                imgSrc="/images/bw.png"
              />
              <ProductCards
                title="Vertical Stripped Shirt"
                price={212}
                imgSrc="/images/greens.png"
              />
              <ProductCards
                title="Loose Fit Bermuda Shorts"
                price={80}
                imgSrc="/images/short.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casual;
