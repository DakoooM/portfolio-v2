import "@/styles/index.scss";
import { MainContainer } from "@/components/Container";
import PageContainer from "@/components/PageContainer";
import Logo from "@/public/logo-gc.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const { events } = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    events.on("routeChangeStart", (event) => {
      setProgress(30);
    })

    events.on("routeChangeError", () => {
      setProgress(100);
    })

    events.on("routeChangeComplete", () => {
      setProgress(100);
    })
  }, [events]);

  return (
    <Fragment>
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
        <Footer logo={Logo} />
      </PageContainer>
    </Fragment>
  )
}
