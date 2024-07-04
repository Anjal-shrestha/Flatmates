
"use client";

import React, { useContext } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";

export default function Images() {
  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { images } = flatDetails;
  console.log(flatDetails);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFlatDetails({ images: [...images, reader.result] });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    updateFlatDetails({
      images: images.filter((_, i) => i !== index),
    });
  };

  return (
    <main className="py-7">
      <div className="ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500">Describe Your Place</p>
        <h3 className="text-lg leading-6 text-blue-900">
          Property and room images
        </h3>
      </div>
      <div className="grid items-center justify-center mt-5">
        <div className="bg-gray-200 shadow-md rounded-md p-4 max-w-lg w-full text-center items-center justify-center">
          <div className="px-4 sm:px-4 mt-2">
            <label className="block text-xs font-medium text-gray-700">
              Show off your Property!
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Let potential flatmates know you're <br />
              for real and appear higher in search results.
            </p>
            <div className="mt-6">
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/*"
              />
              <button
                className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700"
                onClick={() => document.getElementById("fileInput").click()}
              >
                {images.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-2">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image}
                          alt={`Selected ${index + 1}`}
                          className="w-24 h-24 object-cover rounded"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  "Add photos"
                )}
              </button>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Flatmate's Hot Tip: for your safety, please don't upload images <br />{" "}
          of the front of your home.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[57.39%]" />
        <div className="flex justify-between p-2 bg-gray-100 border-t border-gray-300">
          <Link href="/flatmate/room-availability">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Back
            </button>
          </Link>
          <Link href="/flatmate/room-mate">
            <button className="px-2 py-2 bg-teal-500 text-white text-xs rounded hover:bg-teal-600 transition-colors">
              Next
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
