"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";
export default function PropertyIntroduction() {
  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { propertyintroduction } = flatDetails;
  console.log(flatDetails);
  const handleInputChange = (event) => {
    updateFlatDetails({ propertyintroduction: event.target.value });
  };
  return (
    <main className="py-7">
      <div className=" ml-64 mx-10">
        <p className="mt-1 text-xs font-light text-gray-500 uppercase ">
          Introduce the Property
        </p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          About the Property
        </h3>
      </div>
      <div className="flex items-center justify-center mt-5">
      <div className="bg-gray-000 shadow-md rounded-md max-w-lg w-full">
          <textarea
            className="w-full text-xs border border-gray-300 rounded-md p-2"
            rows="10"
            placeholder="Everything you want"
            value={propertyintroduction}
            onChange={handleInputChange}
          />
        </div>
       
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-fulll" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="your-introduction">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="details">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
