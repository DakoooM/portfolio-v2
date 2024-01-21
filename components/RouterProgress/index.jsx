import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import NavbarContext from "@/contexts/NavbarContext";

function RouterProgress({ color = undefined }) {
  const { events } = useRouter();
  const [progress, setProgress] = useState(0);
  const { setShowNavbarMenu } = useContext(NavbarContext);

  useEffect(() => {
    const onChangeRouter = () => {
      setProgress(100);
      setShowNavbarMenu(false);
    }

    events.on("routeChangeStart", () => setProgress(30));
    events.on("routeChangeError", () => setProgress(100));
    events.on("routeChangeComplete", onChangeRouter);
  }, [events]);

  return (
    <LoadingBar
      color={color || "#4589d7"}
      waitingTime={700}
      height={3}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  )
}

export default RouterProgress;