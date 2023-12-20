import { createContext } from "react";

const ModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
  
  modalTitle: "",
  setModalTitle: () => {},

  modalContent: undefined,
  setModalContent: () => {}
});

export default ModalContext;