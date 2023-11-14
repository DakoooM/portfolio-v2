import Image from "next/image";
import Heading from "@/components/Heading";
import { Fragment } from "react";
import Link from "next/link";
import { BsYoutube } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

function Footer({ logo }) {
  return (
    <Fragment>
      <div className="FooterTopbar">
        <Image src={logo} width={80} height={80} className="Logo" draggable={false} />
        <Link href="/">Me contactez</Link>

        <div className="socials">
          <Link href="/" className="social"><BsYoutube/></Link>
          <Link href="/" className="social"><FaFacebookF/></Link>
          <Link href="/" className="social"><BiLogoLinkedin/></Link>
        </div>
      </div>

      <div className="Footer">

        <div className="group">
          <Heading className="">Title</Heading>

          <ul className="group-list">
            <li>Dako</li>
            <li>Dako</li>
            <li>Dako</li>
            <li>Dako</li>
            <li>Dako</li>
          </ul>
        </div>

        <div className="group">
          <Heading className="">Title 2</Heading>

          <ul className="group-list">
            <li>Dako</li>
            <li>Dako</li>
            <li>Dako</li>
            <li>Dako</li>
            <li>Dako</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer;