import { NavItems } from "@/global.config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Pivot as Hamburger } from "hamburger-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toPascalCase } from "@/utils/strings.util";

function NavbarItem({
  to = "/home",
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
        <Link href="/home">
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
      </div>

      <Hamburger duration={0.5} toggled={toogleHamburger} toggle={setToogleHamburger} />
    </div>
  )
}

export default Navbar;