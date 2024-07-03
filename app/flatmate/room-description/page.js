"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Description() {
  return (
    <main className="py-7">
      <div className="grid items-center justify-center mt-5">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg w-full text-center items-center justify-center">
          <div className="px-4 sm:px-4 mt-2">
            <h3 className="text-lg leading-6 text-blue-900">
             Describe yourself and property
            </h3>
            <div class="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto my-4">
              <span class="text-gray-600 text-4xl">✉</span>
            </div>

            <h4 className=" leading-6 text-blue-900">
              Introduce yourself and property
            </h4>
            <p className="text-xs text-gray-500 my-2">
              Help your future flatmate learn about you and your property
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[85.39%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/room-accepting">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/your-introduction">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
