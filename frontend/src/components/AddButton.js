import React from "react";
import "../styles/AddButton.css";
import { useState } from "react";
import Modal from "./Modal";

export default function AddButton() {
  const [openModal, setOpenModal] = useState(false);
  function showModal() {
    if(openModal===false) setOpenModal(true);
  }
  function hideModal() {
    if(openModal===true) setOpenModal(false);
  }
  return (
    <>
      <div className="add-button-container">
        <div className="add-button-circle" onClick={showModal}>
          <div className="plus">
            <div className="add-button-vertical-bar" />
            <div className="add-button-horizontal-bar" />
          </div>
        </div>
      </div>
      
      {openModal && <Modal hideModal={hideModal}/>}
    </>
  );
}
