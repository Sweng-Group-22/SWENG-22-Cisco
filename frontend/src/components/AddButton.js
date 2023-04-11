import React from "react";
import "../styles/AddButton.css";


export default function AddButton(props) {

  return (
    <>
      <div className="add-button" onClick={props.showModal}></div>
    </>
  );
}
