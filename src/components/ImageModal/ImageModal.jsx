import ReactModal from "react-modal";
import css from "./ImageModal.module.css";
import { useState } from "react";

export default function ImageModal({ openModal }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    // <div>
    //   <button onClick={this.handleOpenModal}>Open Modal</button>
    //   <ReactModal
    //     isOpen={openModal}
    //     contentLabel="onRequestClose Example"
    //     onRequestClose={openModal}
    //     shouldCloseOnOverlayClick={true}
    //   >
    //     <p>Modal text!</p>
    //     <button onClick={this.handleCloseModal}>Close Modal</button>
    //   </ReactModal>
    // </div>
    <div>
      <button onClick={openModal}>Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={openModal}
        style={css.content}
        contentLabel="Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <button onClick={openModal}>close</button>
        <div>I am a modal</div>
      </ReactModal>
    </div>
  );
}
