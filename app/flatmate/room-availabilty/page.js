"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Availability() {
  return (
    <main className="py-8">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500 ">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Room availability
        </h3>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg  w-full">
          <div className="mt-2">
            <label className="block text-xs font-medium text-gray-700">
              Property Address
            </label>
            <div className=" pr-64">
            <input
              type="date"
              className="mt-1 block w-full text-xs border border-gray-300 rounded-md py-2"
              placeholder="01/02"
            />
            </div>
          </div>
          <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700 ">
                      Minimum lenght of stay
                    </label>
                    <select className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md">
                      <option>No minimum stay</option>
                      <option>one years</option>
                      <option>two years</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700 ">
                      Maximum lenght of stay
                    </label>
                    <select className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md">
                      <option>No Maximum stay</option>
                      <option>five years</option>
                      <option>ten years</option>
                    </select>
                  </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[49.65%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/room-rent">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/room-images">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
