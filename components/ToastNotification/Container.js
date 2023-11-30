import { v4 as uuid } from "uuid";
import { ToastNotification } from ".";
import useLocalStorage from "use-local-storage";

export default function ToastContainer() {
  const [notifications] = useLocalStorage("notifs", []);
  console.log("notifications", notifications);

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