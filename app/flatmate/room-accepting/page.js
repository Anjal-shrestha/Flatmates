"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Accepting() {
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
      selectedItems.includes(item)
        ? "bg-gray-200 border-teal-600"
        : "bg-gray-000"
    }`;

  return (
    <main className="py-7">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-xs font-light text-gray-500 uppercase ">
          Your ideal flatmate(s)
        </p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Accepting
        </h3>
      </div>
      <div className="flex items-center justify-center mt-5">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="px-4 mt-6">
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 justify-around items-center">
              {[
                "Backpackers",
                "Students",
                "Smokers",
                "LGBTQIA+?",
                "40+ years olds",
                "Children",
                "Pets",
                "Retirees",
                "On welfare",
              ].map((item) => (
                <button
                  key={item}
                  className={buttonClasses(item)}
                  onClick={() => handleButtonClick(item)}
                >
                  <div className="p-4 rounded-full border"></div>
                  <span className="text-sm text-gray-600 text-center">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[78.99%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="room-preference">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="room-description">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
