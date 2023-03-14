import React from "react";
import "../styles/CloseButton.css";
import { useState } from "react";
import Popup from "./Popup";

export default function CloseButton() {
  const [showPopup, setshowPopup] = useState(false);
  function toggleAddPopup() {
    setshowPopup(prev=> !prev);
  }
  return (
    <>
      <div className="close-container">
        <div className="close-circle" onClick={()=>{toggleAddPopup()}}>
          <div className="cross">
            <div className="close-left-diagonal-bar" />
             <div className="close-right-diagonal-bar" />
          </div>
        </div>
      </div>
      {showPopup && <Popup showFunc={toggleAddPopup}/>}
    </>
  );
}
