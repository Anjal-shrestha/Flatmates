"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Features() {
  const [selectedBedSize, setSelectedBedSize] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleButtonClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const buttonClasses = (item) =>
    `flex flex-col items-center space-y-2 px-4 py-2 rounded border  ${
      selectedItems.includes(item) ? "bg-gray-200 border-teal-600" : "bg-gray-000"
    }`;

  return (
    <main className="py-7">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500 ">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Room Features
        </h3>
      </div>
      <div className="flex items-center justify-center mt-5">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="px-4 sm:px-4 mt-2">
            <label className="block text-xs font-medium text-gray-700">
              Bed Size
            </label>
            <div className="flex mt-1 ">
              {["Single", "Double", "Queen", "King", "None"].map((item) => (
                <button
                  key={item}
                  className={`px-5 py-1 text-xs border ${
                    selectedBedSize === item
                      ? "bg-gray-200 border-blue-400"
                      : "border-gray-400"
                  }`}
                  onClick={() => setSelectedBedSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="px-4 mt-6">
      <label className="block text-xs font-medium text-gray-700">
        Room Furnishings and Features
      </label>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 justify-around items-center">
        {[
          "Bed side table",
          "Wardrobe",
          "Drawers",
          "Air conditioner",
          "Heater",
          "Desk",
          "Lamp",
          "Chair",
          "Couch",
          "TV",
          "Balcony",
          "Door lock",
          "Kitchenette",
        ].map((item) => (
          <button
            key={item}
            className={buttonClasses(item)}
            onClick={() => handleButtonClick(item)}
          >
            <div className="p-4 rounded-full border"></div>
            <span className="text-sm text-gray-600 text-center">{item}</span>
          </button>
        ))}
      </div>
    </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[35.79%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/about-room">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/room-rent">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
