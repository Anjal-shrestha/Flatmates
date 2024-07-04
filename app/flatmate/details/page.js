"use client"

import { useContext } from "react";
import FlatContext from "@/app/context/flat/context";

export default function DetailsPage() {
  const { flatDetails } = useContext(FlatContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Flat Details</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Accommodation Type</h2>
          <p className="text-gray-700">{flatDetails.accommodationType}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Property Type</h2>
          <p className="text-gray-700">{flatDetails.propertyType}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Bedrooms</h2>
          <p className="text-gray-700">{flatDetails.bedrooms}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Bathrooms</h2>
          <p className="text-gray-700">{flatDetails.bathrooms}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Parking</h2>
          <p className="text-gray-700">{flatDetails.parking}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Internet</h2>
          <p className="text-gray-700">{flatDetails.internet}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">People</h2>
          <p className="text-gray-700">{flatDetails.people}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Rooms</h2>
          <p className="text-gray-700">{flatDetails.rooms.join(", ")}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Selected Bed Size</h2>
          <p className="text-gray-700">{flatDetails.selectedBedSize}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Selected Items</h2>
          <p className="text-gray-700">{flatDetails.selectedItems.join(", ")}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Weekly Rent</h2>
          <p className="text-gray-700">{flatDetails.weeklyRent}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Bills Included</h2>
          <p className="text-gray-700">{flatDetails.billsIncluded ? "Yes" : "No"}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Bond</h2>
          <p className="text-gray-700">{flatDetails.bond}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Available Date</h2>
          <p className="text-gray-700">{flatDetails.availableDate}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Minimum Stay</h2>
          <p className="text-gray-700">{flatDetails.minStay}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Maximum Stay</h2>
          <p className="text-gray-700">{flatDetails.maxStay}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-2">Images</h2>
          <p className="text-gray-700">{flatDetails.images.join(", ")}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-2">Preference</h2>
          <p className="text-gray-700">{flatDetails.preference}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-2">Accepting</h2>
          <p className="text-gray-700">{flatDetails.accepting}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-2">Introduction</h2>
          <p className="text-gray-700">{flatDetails.introduction}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-2">Property Introduction</h2>
          <p className="text-gray-700">{flatDetails.propertyintroduction}</p>
        </div>
      </div>
    </div>
  );
}
