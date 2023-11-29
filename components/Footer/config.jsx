import { FaDiscord } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

export const FooterSectionLinks = {
  "Raccourcis": [
    {label: "Acceuil", link: "/home"},
    {label: "Mes Projets", link: "/portfolio"},
    {label: "Mes Tarifs", link: "/tarifs"},
    {label: "Contact", link: "/contact"},
  ],
  "Légales": [
    {label: "Mention Légales", link: "/legals"},
    {label: "Conditions d'utilisations", link: "/terms-of-use"},
  ]
}

const sIcons = 30;

export const FooterSocials = [
  {
    title: "Me suivre sur YouTube", 
    link: "https://www.youtube.com/@DakoM/videos", 
    icon: (size = sIcons, cls = "icon") => <FaYoutube size={size} className={cls} />
  },
  {
    title: "Suivre mes projets open source sur Github", 
    link: "https://github.com/DakoooM", 
    icon: (size = sIcons, cls = "icon") => <FaGithub size={size} className={cls} />
  },
  {
    title: "Me suivre sur Linkedin", 
    link: "https://www.linkedin.com/in/gcassinis/", 
    icon: (size = sIcons, cls = "icon") => <FaLinkedin size={size} className={cls} />
  },
  {
    title: "Rejoindre ma communauté sur Discord", 
    link: "https://discord.gg/bJeePHsnJm", 
    icon: (size = sIcons, cls = "icon") => <FaDiscord size={size} className={cls} />
  },
]