import Button from "@/components/Button/Button";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Image from "next/image";
import Assets404 from "@/public/404.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function NotFound() {

  return (
    <div className="NotFound">
      <HtmlHeader title="404 - Page non trouvée"/>
      <Heading level={1} className="title">Page non trouvée</Heading>
      <p className="path-txt">le chemin n'existe pas sur nos serveurs.</p>

      <hr className="sep" />

      <Image src={Assets404} alt="Erreur 404 Giovani" className="image404" draggable={false}/>
      <Button href="/" leftIcon={<IoIosArrowRoundForward size={25}/>} rounded={10}>Revenir a l'acceuil</Button>
    </div>
  )
}

export default NotFound;