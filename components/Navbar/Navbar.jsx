import { NavItems } from "@/global.config";
import Image from "next/image";
import Link from "next/link";
import { Pivot as Hamburger } from "hamburger-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavbarItem from "./Item";
import ThemeSwitcher from "../ThemeSwitcher";

function Navbar({ logo }) {
  const [toogleHamburger, setToogleHamburger] = useState(false);

  return (
    <div className={toogleHamburger ? "Navbar responsive" : "Navbar"}>
      <div className="Left">
        <Link href="/">
          <Image src={logo} alt="Logo gcassinis" width={60} height={60} draggable={false} className="Logo" />
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