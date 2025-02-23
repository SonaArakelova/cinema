import "./loading.css";
import React from "react";


export function Loading() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading please wait ...</p>
    </div>
  );
}