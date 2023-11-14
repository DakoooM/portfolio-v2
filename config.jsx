import { FaRegBuilding } from "react-icons/fa";
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoMegaphone } from "react-icons/go";

export const NavItems = [
  {
    label: "acceuil",
    to: "/",
    icon: (size) => <FaRegBuilding size={size}/>,
  },
  {
    label: "portfolio",
    to: "/portfolio",
    icon: (size) => <HiMiniGlobeAmericas size={size}/>,
  },
  {
    label: "tarifs",
    to: "/tarifs",
    icon: (size) => <AiOutlineShoppingCart size={size}/>,
  },
  {
    label: "contact",
    to: "/contact",
    icon: (size) => <GoMegaphone size={size}/>,
  },
];