import { NavItems } from "@/global.config";
import Image from "next/image";
import Link from "next/link";
import { Pivot as Hamburger } from "hamburger-react";
import { useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import NavbarItem from "./Item";
import ThemeSwitcher from "../ThemeSwitcher";
import NavbarContext from "@/contexts/NavbarContext";

function Navbar({ logo }) {
  const { showNavbarMenu, setShowNavbarMenu } = useContext(NavbarContext);

  useEffect(() => {
    showNavbarMenu ? document.body.classList.add("ov-hidden") : document.body.classList.remove("ov-hidden");

    return () => document.body.classList.remove("ov-hidden");
  }, [showNavbarMenu]);

  return (
    <div className={showNavbarMenu ? "Navbar actived" : "Navbar"}>
      <div className="Left">
        <Link href="/">
          <Image src={logo} alt="Logo gcassinis" quality={100} width={60} height={60} draggable={false} className="Logo" />
        </Link>
      </div>

      <div className="Right">
        {
          NavItems.map(item => {
            const uniqueId = uuidv4();
            
            return (
              <NavbarItem to={item.to} key={uniqueId}>
                {item.icon(15)}{item.label}
              </NavbarItem>
            )
          })
        }
        
        <ThemeSwitcher/>
      </div>

      <Hamburger duration={0.5} toggled={showNavbarMenu} toggle={setShowNavbarMenu} />
    </div>
  )
}

export default Navbar;