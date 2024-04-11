import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, toggleModal }) {
  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
        // style={css.content}
        contentLabel="Modal"
      >
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */
