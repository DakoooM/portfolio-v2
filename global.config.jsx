import { FaRegBuilding } from "react-icons/fa";
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBulbOutline, IoMailUnreadOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

const NavItemsIconsSize = 25;
export const NavItems = [
  {
    label: "Acceuil",
    to: "/home",
    icon: (size) => <FaRegBuilding size={NavItemsIconsSize || size} />
  },
  {
    label: "Projets",
    to: "/portfolio",
    icon: (size) => <HiMiniGlobeAmericas size={NavItemsIconsSize || size} />
  },
  {
    label: "Tarifs",
    to: "/tarifs",
    icon: (size) => <AiOutlineShoppingCart size={NavItemsIconsSize || size} />
  },
  {
    label: "Contact",
    to: "/contact",
    icon: (size) => <IoMailUnreadOutline size={NavItemsIconsSize || size} />
  },
];

const CardSkillIconSize = 40;

export const CardSkillsItems = [
  {
    title: "Gestion de projets web",
    description: "Site vitrine, corporate, évènementiel, e-commerce, intranet, application mobile.",
    icon: (size, className) => <IoBulbOutline size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
  {
    title: "Intégration Web",
    description: "Des intégrations HTML5 / CSS3 respectueuses des standards du Web.",
    icon: (size, className) => <FiEdit size={CardSkillIconSize || size} className={className}/>,
  },
]