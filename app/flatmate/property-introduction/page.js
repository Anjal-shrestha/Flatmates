"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Introduction() {
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
        <div className="bg-gray-000 shadow-md rounded-md  max-w-lg w-full">
          <textarea
            className="  w-full  text-xs border border-gray-300 rounded-md p-2"
            rows="10"
            placeholder="What makes your share house shine? This will appear at the top of  your listing,so make it pop !"
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
          <Link href="#">
            <button className="px-2 py-2 bg-slate-300 text-white text-xs rounded">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
