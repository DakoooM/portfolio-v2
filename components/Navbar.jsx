import { NavItems } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Pivot as Hamburger } from "hamburger-react";
import { useState } from "react";

function NavbarItem({ 
  to = "/", 
  label = undefined, 
  children = undefined 
}) {
  const { pathname } = useRouter();
  
  return (
    <Link className={to === pathname ? "NavbarItem active" : "NavbarItem"} href={to}>
      {children || label}
    </Link>
  )
}

function Navbar({ logo }) {
  const [toogleHamburger, setToogleHamburger] = useState(false);

  return (
    <div className={toogleHamburger ? "Navbar responsive" : "Navbar"}>
      <div className="Left">
        <Link href="/">
          <Image src={logo} width={60} height={60} draggable={false} className="Logo"/>
        </Link>
      </div>

      <div className="Right">
        {
          NavItems.map(item => 
            <NavbarItem to={item.to}>
              {item.icon(15)}{item.label}
            </NavbarItem>
          )
        }
      </div>

      <Hamburger duration={0.5} toggled={toogleHamburger} toggle={setToogleHamburger}/>
    </div>
  )
}

export default Navbar;