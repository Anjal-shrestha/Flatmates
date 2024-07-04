"use client";

import React, { useContext } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";

export default function Preference() {

  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { preference } = flatDetails;
  console.log(flatDetails);
  const handlePreferenceClick = (value) => {
    updateFlatDetails({ preference: value });
  };

  return (
    <main className="py-7">
      <div className="ml-64 mx-10">
        <p className="mt-1 text-xs font-light text-gray-500 uppercase">
          Your ideal flatmate(s)
        </p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">
          Flatmate Preferences
        </h3>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="flex flex-col gap-2 mt-2">
            {[
              "Women only",
              "Men only",
              "No couples",
              "Couple",
              "Anyone (inc. couples)",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className={`px-4 py-2 my-2 text-xs font-medium rounded-md border border-gray-400 hover:bg-gray-200 hover:border-blue-500 ${
                  preference === item ? "bg-gray-200 border-blue-500" : ""
                }`}
                onClick={() => handlePreferenceClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[71.39%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/room-mate">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/room-accepting">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
