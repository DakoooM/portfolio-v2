import { FaRegBuilding } from "react-icons/fa";
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoMegaphone } from "react-icons/go";
import { IoBulbOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";

export const NavItems = [
  {
    label: "acceuil",
    to: "/home",
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