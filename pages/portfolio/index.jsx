import Heading from "@/components/Heading";
import HtmlHeader from "@/components/HtmlHeader";
import ProjectCard from "@/components/ProjectCard";
import ProjectCardContainer from "@/components/ProjectCard/Container";
import { ProjectList } from "./config";

function PortfolioPage() {
  return (
    <div className="PortfolioPage">
      <HtmlHeader
        title="Cassinis Giovani - Mes projets"
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <div>
        <Heading level={1} className="pageTitle">MES PROJETS</Heading>
        <p className="desc">Découvrez mes projets web et bien d'autres.</p>
      </div>

      <ProjectCardContainer>
        {ProjectList.map(project => <ProjectCard key={`project_${project.title}`} {...project}/>)}
      </ProjectCardContainer>
    </div>
  )
}

export default PortfolioPage;