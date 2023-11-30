import { FaCss3Alt, FaHtml5, FaJs, FaSass } from "react-icons/fa";

const dev_iconSize = 50;

export const devSkills = [
  {
    lang: "Javascript", 
    key: "lang_js",
    icon: (info, style) => <FaJs size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "JavaScript est au cœur des langages utilisés par les développeurs web",
    colors: ["#FFCA28", "#ffd028"],
    percent: 80
  },
  {
    lang: "CSS (Cascade Style Sheet)", 
    key: "lang_css",
    icon: (info, style) => <FaCss3Alt size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "CSS est au cœur des langages utilisés par les développeurs web",
    colors: ["#42A5F5", "#2f8cd8"],
    percent: 90
  },
  {
    lang: "HTML5 (Hyper Text Markdown Language)", 
    key: "lang_html",
    icon: (info, style) => <FaHtml5 size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "HTML5 est au cœur des langages utilisés par les développeurs web",
    colors: ["#CB4827", "#cb5b27"],
    percent: 80
  },
  {
    lang: "SCSS (Syntactically awesome stylesheets)", 
    key: "lang_scss",
    icon: (info, style) => <FaSass size={dev_iconSize} className="icon" title={info} style={style}/>,
    rotate: 90,
    height: 7,
    info: "SCSS est au cœur des langages utilisés par les développeurs web",
    colors: ["#CC689A", "#cc68bb"],
    percent: 60
  },
]