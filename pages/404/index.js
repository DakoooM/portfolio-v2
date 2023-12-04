import Button from "@/components/Button/Button";
import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import Image from "next/image";
import Assets404 from "@/public/404.gif";

function NotFound() {
  return (
    <div className="NotFound">
      <HtmlHeader title="404 - Page non trouvée"/>
      <Image src={Assets404} alt="Erreur 404 Giovani" className="image404" draggable={false}/>
      <Heading level={1} className="align">Page non trouvée</Heading>
      <Button href="/home" type="danger" rounded={5}>Revenir a l'acceuil</Button>
    </div>
  )
}

export default NotFound;