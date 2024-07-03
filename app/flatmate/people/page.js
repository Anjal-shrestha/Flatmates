"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function People() {
  const [selectedPeople, setSelectedPeople] = useState("");
  return (
    <main className="py-8">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500 ">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          About the Flatmates
        </h3>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="max-w-4xl mx-auto sm:px-4 lg:px-6">
            <div className="bg-gray-000">
              <div className="px-4 sm:px-4">
                <div className="mt-4">
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      How many people will live in your home?
                    </label>
                    <div className="flex mt-1 ">
                      {["1", "2", "3", "4", "5", "6+"].map((item) => (
                        <button
                          key={item}
                          className={`px-5 py-1 text-xs border  border-gray-400${
                            selectedPeople === item
                              ? "bg-gray-200 border-blue-400"
                              : "border-gray-400"
                          }`}
                          onClick={() => setSelectedPeople(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Including yourself and your new Flatmates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[21.42%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/about">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/about-room">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
