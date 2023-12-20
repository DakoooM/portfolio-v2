import "@/styles/index.scss";
import { MainContainer } from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import RouterProgress from "@/components/RouterProgress";
import Logo from "@/public/logo-gc.png";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";
import Context from "@/components/Context";

const ToastContainer = dynamic(() => import("@/components/ToastNotification/Container"), { ssr: false });
const ScrollTop = dynamic(() => import("@/components/ScrollTop"), { ssr: false });
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Modal />
      <ToastContainer />
      <ScrollTop />
      <RouterProgress/>

      <PageContainer>
        <Navbar logo={Logo} />

        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>

        <Footer />
      </PageContainer>
    </Context>
  )
}