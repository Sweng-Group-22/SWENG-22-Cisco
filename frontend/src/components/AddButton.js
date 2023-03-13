import React from "react";
import "../styles/AddButton.css";
import { useState } from "react";
import Popup from "./Popup";

export default function AddButton() {
  const [showPopup, setshowPopup] = useState(false);
  function toggleAddPopup() {
    setshowPopup(prev=> !prev);
  }

  return (
    <>
      <div className="add-button-container">
        <div className="add-button-circle" onClick={()=>{toggleAddPopup(showPopup)}}>
          <div className="plus">
            <div className="add-button-vertical-bar" />
            <div className="add-button-horizontal-bar" />
          </div>
        </div>
      </div>
      
      {showPopup && <Popup showFunc={toggleAddPopup}/>}
    </>
  );
}
