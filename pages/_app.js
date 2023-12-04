import "@/styles/index.scss";
import { MainContainer } from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import Logo from "@/public/logo-gc.png";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import dynamic from "next/dynamic";
import ProjectContext from "@/contexts/ProjectContext";
import NotificationContext from "@/contexts/NotificationContext";

const ToastContainer = dynamic(() => import("@/components/ToastNotification/Container"), {ssr: false});
const ScrollTop = dynamic(() => import("@/components/ScrollTop"), {ssr: false});
const ProjectInfo = dynamic(() => import("@/components/ProjectCard/Info"), {ssr: false});

export default function App({ Component, pageProps }) {
  const { events } = useRouter();
  const [ progress, setProgress ] = useState(0);
  const [ showProjectInfo, setShowProjectInfo ] = useState(false);
  const [ ProjectData, setProjectData ] = useState(undefined);
  const [ notifications, setNotification ] = useState([]);

  useEffect(() => {
    events.on("routeChangeStart", () => setProgress(30));
    events.on("routeChangeError", () => setProgress(100));
    events.on("routeChangeComplete", () => setProgress(100));
  }, [events]);

  const ProjectValues = {
    show: showProjectInfo,
    setShow: setShowProjectInfo,
    setData: setProjectData,
    data: ProjectData
  };

  const NotificationValues = {
    notifications,
    addNotification: (data) => setNotification([...notifications, data]),
    setNotification
  };

  return (
    <NotificationContext.Provider value={NotificationValues}>
      <ProjectContext.Provider value={ProjectValues}>
        <ProjectInfo />
        <ToastContainer/>
        <ScrollTop/>

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
      </ProjectContext.Provider>
    </NotificationContext.Provider>
  )
}