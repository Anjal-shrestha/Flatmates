"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleButtonClick = (content) => {
    setSelectedContent(content);
    console.log(selectedContent)
  };

  const buttonCircleClasses = (content) =>
    `p-4 rounded-full ${
      selectedContent === content
        ? "bg-blue-200 border-2 border-blue-500"
        : "bg-gray-200"
    }`;
  const [propertyType, setPropertyType] = useState(null);

  const handlePropertyTypeClick = (type) => {
    setPropertyType(type);
  };

  const propertyButtonClasses = (type) =>
    `px-4 py-2 border rounded ${
      propertyType === type ? "bg-blue-200 border-blue-500" : "bg-gray-200"
    }`;

  return (
    <>
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4">
            <div className="sm:ml-56">
              <p className="mt-1 text-sm text-gray-500">Describe Your Place</p>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                What type of accommodation are you offering?
              </h3>
              <div className="mt-8 flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  className="flex flex-col items-center"
                  onClick={() =>
                    handleButtonClick("Room(s) in an existing sharehouse")
                  }
                >
                  <div
                    className={buttonCircleClasses(
                      "Room(s) in an existing sharehouse"
                    )}
                  ></div>
                  <span className="mt-2 text-sm text-gray-600 text-center">
                    Room(s) in an existing sharehouse
                  </span>
                </button>
                <button
                  className="flex flex-col items-center"
                  onClick={() => handleButtonClick("Whole property for rent")}
                >
                  <div
                    className={buttonCircleClasses("Whole property for rent")}
                  ></div>
                  <span className="mt-2 text-sm text-gray-600 text-center">
                    Whole property for rent
                  </span>
                </button>
                <button
                  className="flex flex-col items-center"
                  onClick={() => handleButtonClick("Student accommodation")}
                >
                  <div
                    className={buttonCircleClasses("Student accommodation")}
                  ></div>
                  <span className="mt-2 text-sm text-gray-600 text-center">
                    Student accommodation
                  </span>
                </button>
                <button
                  className="flex flex-col items-center"
                  onClick={() => handleButtonClick("Homestay")}
                >
                  <div className={buttonCircleClasses("Homestay")}></div>
                  <span className="mt-2 text-sm text-gray-600 text-center">
                    Homestay
                  </span>
                </button>
              </div>

              {/* selected content       selected content        selected content     */}
              {selectedContent ?
                <div className="mt-4">
                  <h4 className="text-lg font-medium text-gray-900">
                    Type of property
                  </h4>
                  <div className="flex justify-center sm:justify-start mt-2 space-x-4">
                    <button
                      className={propertyButtonClasses("House")}
                      onClick={() => handlePropertyTypeClick("House")}
                    >
                      House
                    </button>
                    <button
                      className={propertyButtonClasses("Flat")}
                      onClick={() => handlePropertyTypeClick("Flat")}
                    >
                      Flat
                    </button>
                  </div>
                </div>: ""
              }
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full">
          {selectedContent && <div className="h-1 bg-teal-500 w-[7.14%]" />}
          <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
            
              <div></div>
           
            <Link href="/flatmate/about">
              {selectedContent && (
                <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
                  Next
                </button>
              )}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
