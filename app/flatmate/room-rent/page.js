"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Features() {
  return (
    <main className="py-8">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500 ">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Rent,Bond and Bills
        </h3>
      </div>

      <div className="grid  items-center justify-center mt-6">
        <div className="bg-gray-100 shadow-md rounded-md p-4 max-w-lg  text-center items-center ">
          <div className="mx-10">
            <label className="block text-xs font-medium text-gray-700">
              Weekly rent
            </label>
            <input
              type="text"
              className="mt-1 block  p-1 text-xs border border-gray-300 rounded-md mx-auto"
              placeholder="$100"
            />
            <p className="text-xs text-gray-500 mt-1">
              Average rent for your suburb isn't available.
            </p>
            <input type="checkbox" name="" className="mt-8" required />
            <p className="text-sm font-medium  text-blue-900 mt-1 inline">
              Bills included in rent
            </p>
          </div>
        </div>
        <div className="mx-auto mt-4 ">
          <p className="text-sm font-medium  text-gray-700  inline">Bond</p>
          <input
            type="text"
            className=" block  p-1 text-xs border border-gray-300 rounded-md "
            placeholder="$"
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[42.32%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/room-features">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/room-availabilty">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
