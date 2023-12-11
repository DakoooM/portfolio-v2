import { createContext } from "react";

const APIContext = createContext({
  setAPIKey: () => {},
  API_Key: ""
});

export default APIContext;