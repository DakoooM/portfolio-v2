import { createContext } from "react";

const NavbarContext = createContext({
  showNavbarMenu: false,
  setShowNavbarMenu: () => {}
});

export default NavbarContext;