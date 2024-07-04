"use client";

import React, { useContext } from "react";
import Link from "next/link";
import FlatContext from "@/app/context/flat/context";

export default function About() {
  const { flatDetails, updateFlatDetails } = useContext(FlatContext);
  const { rooms } = flatDetails;
  console.log(flatDetails);
  const addRoom = () => {
    const newRoom = { roomName: "", roomType: "", roomFurnishings: "", bathroom: "" };
    updateFlatDetails({ rooms: [...rooms, newRoom] });
  };

  const handleRoomChange = (index, field, value) => {
    const updatedRooms = rooms.map((room, i) =>
      i === index ? { ...room, [field]: value } : room
    );
    updateFlatDetails({ rooms: updatedRooms });
  };

  return (
    <main className="py-8">
      <div className="ml-64 mx-10">
        <p className="mt-1 text-sm text-gray-500">Describe Your Place</p>
        <h3 className="text-lg leading-6 font-medium text-blue-900">About the Room(s)</h3>
      </div>
      <div className="flex items-center justify-center mt-6">
        <div className="bg-gray-000 shadow-md rounded-md p-4 max-w-lg w-full">
          <div className="max-w-4xl mx-auto sm:px-4 lg:px-6">
            <div className="bg-gray-000">
              <div className="px-4 sm:px-4">
                {rooms.map((room, index) => (
                  <div key={index} className="mt-4">
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-700">Room Name</label>
                      <input
                        type="text"
                        value={room.roomName}
                        onChange={(e) => handleRoomChange(index, "roomName", e.target.value)}
                        className="mt-1 block w-full p-1 text-xs border border-gray-300 rounded-md"
                        placeholder={`Room ${index + 1}`}
                      />
                    </div>
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-700">Room Type</label>
                      <div className="flex mt-1 space-x-2">
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.roomType === "Private" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "roomType", "Private")}
                        >
                          Private
                        </button>
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.roomType === "Shared" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "roomType", "Shared")}
                        >
                          Shared
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-700">Room Furnishings</label>
                      <div className="flex mt-1 space-x-2">
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.roomFurnishings === "Flexible" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "roomFurnishings", "Flexible")}
                        >
                          Flexible
                        </button>
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.roomFurnishings === "Furnished" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "roomFurnishings", "Furnished")}
                        >
                          Furnished
                        </button>
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.roomFurnishings === "Unfurnished" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "roomFurnishings", "Unfurnished")}
                        >
                          Unfurnished
                        </button>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-700">Bathroom</label>
                      <div className="flex mt-1 space-x-2">
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.bathroom === "Shared" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "bathroom", "Shared")}
                        >
                          Shared
                        </button>
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.bathroom === "Own" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "bathroom", "Own")}
                        >
                          Own
                        </button>
                        <button
                          className={`px-5 py-1 text-xs border rounded ${
                            room.bathroom === "Ensuite" ? "bg-gray-200 border-blue-700" : "border-gray-400"
                          }`}
                          onClick={() => handleRoomChange(index, "bathroom", "Ensuite")}
                        >
                          Ensuite
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <hr className="m-4" />
              </div>
              <p
                className="text-xs text-center text-blue-400 mt-1 cursor-pointer"
                onClick={addRoom}
              >
                +Add another room
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <div className="h-1 bg-teal-500 w-[28.56%]" />
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
