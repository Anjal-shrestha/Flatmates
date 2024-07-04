"use client";

import React, { useContext } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";

export default function Availability() {
  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { availableDate, minStay, maxStay } = flatDetails;
  console.log(flatDetails);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFlatDetails({ [name]: value });
  };

  return (
    <main className="py-8">
      <div className="ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Room Availability
        </h3>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="bg-gray-100 shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="mt-2">
            <label className="block text-xs font-medium text-gray-700">
              Available Date
            </label>
            <div className="pr-64">
              <input
                type="date"
                name="availableDate"
                value={availableDate}
                onChange={handleInputChange}
                className="mt-1 block w-full text-xs border border-gray-300 rounded-md py-2"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="block text-xs font-medium text-gray-700">
              Minimum Length of Stay
            </label>
            <select
              name="minStay"
              value={minStay}
              onChange={handleInputChange}
              className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
            >
              <option value="">No minimum stay</option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
            </select>
          </div>
          <div className="mt-2">
            <label className="block text-xs font-medium text-gray-700">
              Maximum Length of Stay
            </label>
            <select
              name="maxStay"
              value={maxStay}
              onChange={handleInputChange}
              className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
            >
              <option value="">No maximum stay</option>
              <option value="5 years">5 years</option>
              <option value="10 years">10 years</option>
              <option value="15 years">15 years</option>
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
