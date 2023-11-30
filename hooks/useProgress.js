import { useState, useEffect, useRef } from "react";

const useProgress = (seconds = 15) => {
  const intervalId = useRef(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      if (progress < 1) {
        setElapsedTime(t => t + 1);
      }
    }, 1000);
    
    return () => clearInterval(intervalId.current);
  }, []);
  
  useEffect(() => {
    setProgress(elapsedTime / seconds);
    
    if (elapsedTime === seconds) clearInterval(intervalId.current);
  }, [elapsedTime]);

  return {
    percent: Math.floor(progress * 100),
    seconds: elapsedTime,
  };
};

export default useProgress;