"use client";

import { v4 as uuid } from "uuid";
import { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import useLocalStorage from "use-local-storage";
import useProgress from "@/hooks/useProgress";

export const ToastNotification = ({
  type = "success", /* success | danger | warning */
  time = 15,
  children = undefined,
  id = undefined
}) => {
  const { percent } = useProgress(time);
  const [notifications, setNotification] = useLocalStorage("notifs", []);

  const onClose = (id) => {
    const findIndex = notifications.findIndex(i => i.id === id);
    console.log("findIndex", findIndex);
    const newArray = notifications.slice(findIndex, findIndex - 1);

    setNotification(newArray);
  }

  useEffect(() => {
    if (percent >= 100) {
      onClose(id);
    }
  }, [percent]);


  return (
    <div className={`Notification ${type}`} id={id}>
      <div className="row-notif">
        <span className="text">
          {children}
        </span>

        <div className="close" onClick={() => onClose(id)}>
          <IoClose className="icon"/>
        </div>
      </div>

      <div className="progress" style={{ width: `${percent}%` }}></div>
    </div>
  )
}

export const useNotification = () => {
  const [notifications, setNotification] = useLocalStorage("notifs", []);
  
  const push = useCallback((text = "None", time = 15, type = "success", id = uuid()) => {  
    setNotification([...notifications, { text, time, type, id }]);
  });

  return [
    push,
  ]
}