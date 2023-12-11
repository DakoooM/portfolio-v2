import "@/styles/index.scss";
import { MainContainer } from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import Logo from "@/public/logo-gc.png";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import dynamic from "next/dynamic";
import ProjectContext from "@/contexts/ProjectContext";
import NotificationContext from "@/contexts/NotificationContext";
import ModalContext from "@/contexts/ModalContext";
import { ThemeProvider } from "next-themes";
import APIContext from "@/contexts/APIContext";
import useFetch from "@/hooks/useFetch";

const ToastContainer = dynamic(() => import("@/components/ToastNotification/Container"), { ssr: false });
const ScrollTop = dynamic(() => import("@/components/ScrollTop"), { ssr: false });
const ProjectInfo = dynamic(() => import("@/components/ProjectCard/Info"), { ssr: false });
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });

export default function App({ Component, pageProps }) {
  const { events } = useRouter();
  const [resp, isLoad, error] = useFetch("/api/v1/token");
  const [progress, setProgress] = useState(0);
  const [showProjectInfo, setShowProjectInfo] = useState(false);
  const [ProjectData, setProjectData] = useState(undefined);
  const [notifications, setNotification] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Aucun");
  const [modalContent, setModalContent] = useState(undefined);
  const [API_Key, setAPIKey] = useState("");

  const ProjectValues = {
    show: showProjectInfo,
    setShow: setShowProjectInfo,
    setData: setProjectData,
    data: ProjectData
  };

  const ModalValues = {
    showModal,
    setShowModal,

    modalTitle,
    setModalTitle,

    modalContent,
    setModalContent
  };

  const NotificationValues = {
    notifications,
    addNotification: (data) => setNotification([...notifications, data]),
    setNotification
  };

  const APIValues = {
    setAPIKey,
    API_Key
  };

  useEffect(() => {
    if (isLoad && resp) {
      console.log("resp", resp.key);
      setAPIKey(resp.key);
    }
  }, [isLoad, resp]);

  useEffect(() => {
    events.on("routeChangeStart", () => setProgress(30));
    events.on("routeChangeError", () => setProgress(100));
    events.on("routeChangeComplete", () => setProgress(100));
  }, [events]);

  return (
    <ThemeProvider themes={["light", "dark"]} defaultTheme="light">
      <NotificationContext.Provider value={NotificationValues}>
        <ProjectContext.Provider value={ProjectValues}>
          <ModalContext.Provider value={ModalValues}>
            <APIContext.Provider value={APIValues}>
              <Modal />
              <ProjectInfo />
              <ToastContainer />
              <ScrollTop />

              <LoadingBar
                color="#4589d7"
                waitingTime={700}
                height={3}
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />

              <PageContainer>
                <Navbar logo={Logo} />

                <MainContainer>
                  <Component {...pageProps} />
                </MainContainer>

                <Footer />
              </PageContainer>
            </APIContext.Provider>
          </ModalContext.Provider>
        </ProjectContext.Provider>
      </NotificationContext.Provider>
    </ThemeProvider>
  )
}