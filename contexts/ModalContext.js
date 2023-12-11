import { createContext } from "react";

const ModalContext = createContext({
  showModal: true,
  setShowModal: () => {},
  
  modalTitle: "",
  setModalTitle: () => {},

  modalContent: undefined,
  setModalContent: () => {}
});

export default ModalContext;