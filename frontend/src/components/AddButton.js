import React from "react";
import "../styles/AddButton.css";
import { useState } from "react";
import Popup from "./Popup";

export default function AddButton() {
  const [showPopup, setshowPopup] = useState(false);
  function toggleAddPopup() {
    setshowPopup(!showPopup);
  }

  return (
    <>
      <div className="add-button-circle" onClick={toggleAddPopup}>
        <div className="plus">
          <div className="add-button-vertical-bar" />
          <div className="add-button-horizontal-bar" />
        </div>
      </div>
      {showPopup && (
        <div className="popup-container" on>
          <h3 className="english">English Phrase</h3>
          <label className="popup-label">
            Language:
            <select>
              <option>Select Language</option>
              <option>Irish</option>
            </select>
          </label>
          <label className="popup-label">Translation:</label>
          <textarea className="popup-textarea" />
          <div className="popup-buttons">
            <button onClick={toggleAddPopup}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      )}
    </>
  );
}
