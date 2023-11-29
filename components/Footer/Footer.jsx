import Heading from "@/components/Heading";
import Link from "next/link";
import { FaCopyright } from "react-icons/fa";
import { FooterSectionLinks, FooterSocials } from "./config";

function FooterSection({ title = "Home", items = [] }) {
  return (
    <div className="group">
      <Heading className="title" level={3}>{title}</Heading>

      <ul className="group-list">
        {
          items.map(item =>
            <Link href={item.link} key={`footer_${item.label}`} target={item?.target || "_self"} className="item">{item.label}</Link>
          )
        }
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">
        <div className="Container">
          <div className="TopFooter">
            <div className="project">
              <span className="name">Gcassinis</span>
            </div>

            <p className="desc">Giovani Cassinis Développeur web freelance depuis 2023.</p>

            <div className="socials">
              {
                FooterSocials.map(item => (
                  <Link href={item.link} key={item.link} title={item.title} target="_blank" className="social">
                    {item.icon(30, "icon")}
                  </Link>
                ))
              }
            </div>
          </div>

          <div className="BottomFooter">
            {
              Object.keys(FooterSectionLinks).map(category =>
                <FooterSection title={category} key={category} items={FooterSectionLinks[category]} />
              )
            }
          </div>
        </div>

        <hr className="sep" />

        <div className="copyright">
          <p className="text">
            <FaCopyright className="icon" /> 2023 gcassinis
          </p>

          <ul className="list">
            <li className="item">
              <Link href="/terms-of-use" className="link">Conditions d'utilisation</Link>
            </li>
            <li className="item">
              <Link href="/legals" className="link">Mentions Légales</Link>
            </li>
            <li className="item">
              <Link href="/contact" className="link">Contactez-moi</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;