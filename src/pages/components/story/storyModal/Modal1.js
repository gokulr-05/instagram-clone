import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import "./modal1.css";

function Modal1({ handleShow, handleClose, show }) {
  let data = useSelector((state) => {
    return state.modalStoryReducer.storyModalData;
  });
  // console.log(data);

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <div className="my-modal-body">
            <img src={data.pic} className="w-100 h-100" alt="" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modal1;
