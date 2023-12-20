import { ProjectList } from "@/global.config";
import PortfolioPage from ".";
import ProjectInfo from "@/components/ProjectCard/Info";
import { useEffect, Fragment } from "react";
import HtmlHeader from "@/components/HtmlHeader";

export const getServerSideProps = ({ query }) => {
  const { id = "undefined" } = query;

  const findHere = ProjectList.filter(i => i.path === id);
  if (findHere.length < 1) return {
    notFound: true
  }

  const data = findHere ? JSON.stringify(findHere[0]) : {};

  return {
    props: {
      data
    }
  }
}

function ProjectWhere(props) {
  const { data } = props;

  const rData = JSON.parse(data);

  useEffect(() => {
    document.body.classList.add("ov-hidden");
    
    return () => document.body.classList.remove("ov-hidden");
  }, []);

  return (
    <Fragment>
      <HtmlHeader
        title={`Cassinis Giovani - Découvrir le projet ${rData.title}`}
        desc="Giovani Cassinis, Développer Web en Freelance depuis 2022, je réalise vos projets professionnel en réalisant un cahier des charges et un devis"
      />

      <ProjectInfo {...rData}/>
      <PortfolioPage header={false}/>
    </Fragment>
  )
}

export default ProjectWhere;