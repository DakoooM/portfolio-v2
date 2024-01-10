import NotificationContext from "@/contexts/NotificationContext";
import ModalContext from "@/contexts/ModalContext";
import APIContext from "@/contexts/APIContext";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import NavbarContext from "@/contexts/NavbarContext";

function Context({ children }) {
  const [resp, isLoad] = useFetch("/api/v1/token", "POST", {});

  const [notifications, setNotification] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);
  const [modalTitle, setModalTitle] = useState("Aucun");
  const [modalContent, setModalContent] = useState(undefined);
  const [API_Key, setAPIKey] = useState(undefined);

  const ContextValues = {
    "modal": {
      showModal,
      setShowModal,

      modalTitle,
      setModalTitle,

      modalContent,
      setModalContent
    },

    "navbar": {
      showNavbarMenu,
      setShowNavbarMenu
    },

    "notif": {
      notifications,
      addNotification: (data) => setNotification([...notifications, data]),
      setNotification
    },

    "api": {
      setAPIKey,
      API_Key
    },
  }

  useEffect(() => {
    if (!API_Key && isLoad && resp) setAPIKey(resp.secret_key);
  }, [isLoad, resp]);

  return (
    <ThemeProvider themes={["light", "dark"]} defaultTheme="light">
      <NavbarContext.Provider value={ContextValues["navbar"]}>
        <NotificationContext.Provider value={ContextValues["notif"]}>
          <ModalContext.Provider value={ContextValues["modal"]}>
            <APIContext.Provider value={ContextValues["api"]}>
              {children}
            </APIContext.Provider>
          </ModalContext.Provider>
        </NotificationContext.Provider>
      </NavbarContext.Provider>
    </ThemeProvider>
  )
}

export default Context;