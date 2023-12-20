import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function RouterProgress({ color = undefined }) {
  const { events } = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    events.on("routeChangeStart", () => setProgress(30));
    events.on("routeChangeError", () => setProgress(100));
    events.on("routeChangeComplete", () => setProgress(100));
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