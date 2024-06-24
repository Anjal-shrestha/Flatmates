import React from "react";
import { Navbar } from "./nav";

export default function MAte({ children }) {
  return (
    
    <div>
        <Navbar/>
    {children}
    </div>
  );
}