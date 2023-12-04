"use client";

import { v4 as uuid } from "uuid";
import { useCallback, useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import useProgress from "@/hooks/useProgress";
import NotificationContext from "@/contexts/NotificationContext";

export const ToastNotification = ({
  type = "success", /* success | danger | warning */
  time = 15,
  children = undefined,
  id = undefined
}) => {
  const { percent } = useProgress(time);
  const { notifications, setNotification } = useContext(NotificationContext);

  const onClose = (id) => {
    const findIndex = notifications.findIndex(i => i.id === id);
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
  const { addNotification } = useContext(NotificationContext);
  
  const push = useCallback((text = "None", time = 15, type = "success", id = uuid()) => {  
    addNotification({ text, time, type, id });
  }, []);

  return [
    push,
  ]
}