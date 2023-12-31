import { NavItems } from "@/global.config";
import Image from "next/image";
import Link from "next/link";
import { Pivot as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NavbarItem from "./Item";
import ThemeSwitcher from "../ThemeSwitcher";

function Navbar({ logo }) {
  const [toogleHamburger, setToogleHamburger] = useState(false);

  useEffect(() => {
    toogleHamburger ? document.body.classList.add("ov-hidden") : document.body.classList.remove("ov-hidden");

    return () => document.body.classList.remove("ov-hidden");
  }, [toogleHamburger]);

  return (
    <div className={toogleHamburger ? "Navbar actived" : "Navbar"}>
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

      <Hamburger duration={0.5} toggled={toogleHamburger} toggle={setToogleHamburger} />
    </div>
  )
}

export default Navbar;