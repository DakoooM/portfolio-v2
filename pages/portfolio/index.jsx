import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";

function PortfolioPage() {
  return (
    <div className="PortfolioPage">
      <HtmlHeader
        title="Cassinis Giovani - Mes projets"
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <Heading level={1}>Découvrir<br/>mes projets</Heading>
    </div>
  )
}

export default PortfolioPage;