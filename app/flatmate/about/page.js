"use client";

import React, { useContext } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";

export default function AboutProperty() {
  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { bedrooms, bathrooms, parking, internet } = flatDetails;
  console.log(flatDetails);
  const handleBedroomsClick = (value) => {
    updateFlatDetails({ bedrooms: value });
  };

  const handleBathroomsClick = (value) => {
    updateFlatDetails({ bathrooms: value });
  };
  const handleParkingChange = (event) => {
    updateFlatDetails({ parking: event.target.value });
  };

  const handleInternetChange = (event) => {
    updateFlatDetails({ internet: event.target.value });
  };

  return (
    <main className="py-8">
      <div className="ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          About the Property
        </h3>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-white shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="max-w-4xl mx-auto sm:px-4 lg:px-6">
            <div className="bg-gray-000">
              <div className="px-4 sm:px-4">
                <div className="mt-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-2">
                    <p className="text-xs text-blue-700">
                      Never fear! Your address is private. Users will only see
                      your suburb.
                    </p>
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Property Address
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
                      placeholder="Property Address"
                    />
                    <a href="#" className="text-xs text-blue-600 mt-1">
                      Having trouble finding your address?
                    </a>
                  </div>

                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Total bedrooms
                    </label>
                    <div className="flex mt-1 space-x-2">
                      {["2", "3", "4", "5", "6+"].map((item) => (
                        <button
                          key={item}
                          className={`px-5 py-1 text-xs border rounded ${
                            bedrooms === item
                              ? "bg-gray-200 border-blue-400"
                              : "border-gray-400"
                          }`}
                          onClick={() => handleBedroomsClick(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Including the one you're offering
                    </p>
                  </div>

                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Total bathrooms
                    </label>
                    <div className="flex mt-1 space-x-2">
                      {["1", "2", "3", "4+"].map((item) => (
                        <button
                          key={item}
                          className={`px-5 py-1 text-xs border rounded ${
                            bathrooms === item
                              ? "bg-gray-200 border-blue-400"
                              : "border-gray-400"
                          }`}
                          onClick={() => handleBathroomsClick(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Parking
                    </label>
                    <select
                      className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
                      value={parking}
                      onChange={handleParkingChange}
                    >
                      <option value="">Select</option>
                      <option value="Two Wheeler">Two Wheeler</option>
                      <option value="Four Wheeler">Four Wheeler</option>
                      <option value="None">None</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Internet
                    </label>
                    <select
                      className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
                      value={internet}
                      onChange={handleInternetChange}
                    >
                      <option value="">Select</option>
                      <option value="High Speed">High Speed</option>
                      <option value="Medium Speed">Medium Speed</option>
                      <option value="Low Speed">Low Speed</option>
                      <option value="None">None</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 w-full">
            <div className="h-1 bg-teal-500 w-[14.28%]" />
            <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
              <Link href="/flatmate">
                <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
                  Back
                </button>
              </Link>
              <Link href="/flatmate/people">
                <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
