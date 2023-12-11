import ModalContext from "@/contexts/ModalContext";
import { memo, useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";

function Modal() {
  const { 
    showModal, 
    modalTitle, 
    modalContent,
    setShowModal 
  } = useContext(ModalContext);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("ov-hidden");
    } else if (!showModal) {
      document.body.classList.remove("ov-hidden");
    }
  }, [showModal]);

  const onCloseModal = () => {
    setShowModal(false);
  }

  const JSX = (
    <div className={`ModalContainer${showModal ? " show" : ""}`}>
      <span className="ModalCloser" onClick={() => onCloseModal()}></span>

      <div className="Modal">
        <div className="ModalTop">
          <span className="ModalTitle">{modalTitle}</span>
          <IoClose className="ModalClose" onClick={() => onCloseModal()}/>
        </div>

        <div className="ModalWrapper">
          <div className="ModalContent">
            {modalContent}
          </div>
        </div>
      </div>
    </div>
  );

  return JSX;
}

export default memo(Modal);