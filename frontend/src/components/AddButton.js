import React from "react";
import "../styles/AddButton.css";


export default function AddButton(props) {

  return (
    <>
      <div className="add-button-container">
        <div className="add-button-circle" onClick={props.showModal}>
          <div className="plus">
            <div className="add-button-vertical-bar" />
            <div className="add-button-horizontal-bar" />
          </div>
        </div>
      </div>
    </>
  );
}
