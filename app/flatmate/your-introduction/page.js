"use client";

import React, { useContext } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";

export default function Introduction() {
  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { introduction } = flatDetails;
  console.log(flatDetails);

  const handleInputChange = (event) => {
    updateFlatDetails({ introduction: event.target.value });
  };

  return (
    <main className="py-7">
      <div className="ml-64 mx-10">
        <p className="mt-1 text-xs font-light text-gray-500 uppercase">
          Introduce yourself
        </p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Tell us about you and your flatmates
        </h3>
      </div>
      <div className="grid items-center justify-center mt-5">
        <div className="bg-gray-000 shadow-md rounded-md max-w-lg w-full">
          <textarea
            className="w-full text-xs border border-gray-300 rounded-md p-2"
            rows="10"
            placeholder="Everything you want"
            value={introduction}
            onChange={handleInputChange}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Tell your potential flatmate a little about yourself and the other
          flatmates living in the home. Describe what you do for work, where
          you're all from and what you do for fun.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[92.99%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/room-description">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/property-introduction">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
