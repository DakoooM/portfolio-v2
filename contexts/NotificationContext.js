import { createContext } from "react";

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  setNotification: () => {}
});

export default NotificationContext;