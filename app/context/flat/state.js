
"use client";

import { useState } from "react";
import FlatContext from "./context";

const FlatState = ({ children }) => {
  const [flatDetails, setFlatDetails] = useState({
    accommodationType: "",
    propertyType: "",
     bedrooms: "",
    bathrooms: "", 
    parking: "", 
    internet: "" ,
    people: "",
    rooms: [],
    selectedBedSize: "",
    selectedItems: [], 
    weeklyRent: "", 
    billsIncluded: false,
    bond: "", 
    availableDate: "", 
    minStay: "", 
    maxStay: "", 
    images: [],
    preference:"",
    accepting:"",
    introduction:"",
    propertyintroduction:"",

  });

  const updateFlatDetails = (details) => {
    setFlatDetails((prevDetails) => ({
      ...prevDetails,
      ...details,
    }));
  };
  

  return (
    <FlatContext.Provider value={{ flatDetails, updateFlatDetails }}>
      {children}
    </FlatContext.Provider>
  );
};

export default FlatState;
