import ProjectContext from "@/contexts/ProjectContext";
import Heading from "../Heading";
import { useContext } from "react";

export default function ProjectCard(data) {
  const { setShow, setData } = useContext(ProjectContext);

  const onShowProject = (data) => {
    setData(data);
    setShow(true);
  }

  return (
    <article className="ProjectCard" onClick={() => onShowProject(data)}>
      <img src={data.minia} draggable={false} alt={`image de ${data.title}`} className="minia"/>

      <div className="ProjectContainer">
        <div>
          <Heading level={3} className="pTitle">{data.title}</Heading>
          <p className="pCat">{data.category}</p>
        </div>
        
        <div className="tags">
          {
            data?.tags.filter((_, k) => k >= data.maxTags).map(tag => <span className="tag" key={`tag_${tag}`}>{tag}</span>)
          }
        </div>

        <span className="pDate">Le {data.publishedAt}</span>
      </div>
    </article>
  )
}