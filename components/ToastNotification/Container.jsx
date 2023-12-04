import { v4 as uuid } from "uuid";
import { ToastNotification } from ".";
import { useContext } from "react";
import NotificationContext from "@/contexts/NotificationContext";

export default function ToastContainer() {
  const { notifications } = useContext(NotificationContext);

  if (notifications) {
    return <div className="NotificationsContainer">
      {
        notifications.map(notif => (
          <ToastNotification type={notif.type} id={notif.id} key={uuid()}>
            {notif.text}
          </ToastNotification>
        ))
      }
    </div>
  }
}