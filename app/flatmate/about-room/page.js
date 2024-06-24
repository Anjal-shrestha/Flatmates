"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className="py-8">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500 ">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          About the Room(s)
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
                      Room Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
                      placeholder="Room 1"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Room Type
                    </label>
                    <div className="flex mt-1 ">
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Private
                      </button>
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Shared
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Room Furnishings
                    </label>
                    <div className="flex mt-1 ">
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Flexible
                      </button>
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Furnished
                      </button>
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Unfurnished
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700">
                      Bathroom
                    </label>
                    <div className="flex mt-1 ">
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Shared
                      </button>
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Own
                      </button>
                      <button className="px-5 py-1 text-xs border border-gray-400">
                        Ensuite
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="m-4" />
              </div>
              <p className="text-xs text-center text-blue-400 mt-1">
                      +Add another room
                    </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[26.66%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/people">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/room-features">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
