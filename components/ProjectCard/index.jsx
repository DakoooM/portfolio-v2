import Heading from "../Heading";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard(data) {
  return (
    <Link href={{
      pathname: "/portfolio/[id]",
      query: { id: data.path }
    }} className="ProjectCardLink">
      <article className="ProjectCard">
        <div className="miniaContainer">
          <Image src={data.minia} width={450} height={250} loading="lazy" onContextMenu={e => e.preventDefault()} draggable={false} alt={`image du Projet ${data.title} de Gcassinis`} className="minia" />
        </div>

        <div className="ProjectContainer">
          <div>
            <Heading level={3} className="pTitle">{data.title}</Heading>
            <p className="pCat">{data.category}</p>
          </div>

          <div className="tags">
            {
              data?.tags.map((tag, k) => k < (data?.maxTags || 3) ? <span className="tag" key={`tag_${tag}`}>{tag}</span> : undefined)
            }...
          </div>

          <span className="pDate">Le {data.publishedAt}</span>
        </div>
      </article>
    </Link>
  )
}