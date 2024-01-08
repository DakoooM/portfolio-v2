import Button from "@/components/Button/Button";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

function NotFound() {

  return (
    <div className="NotFound">
      <HtmlHeader title="404 - Page non trouvée"/>
      <Heading level={1} className="title">Page non trouvée</Heading>
      <p className="path-txt">le chemin n'existe pas sur nos serveurs.</p>

      <hr className="sep" />

      <Image src="/404.png" alt="Erreur 404 Giovani" className="image404" draggable={false}/>
      <Button href="/" leftIcon={<IoIosArrowRoundForward size={25}/>} rounded={10}>Revenir a l'acceuil</Button>
    </div>
  )
}

export default NotFound;