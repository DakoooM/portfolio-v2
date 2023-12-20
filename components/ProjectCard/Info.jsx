import Button from "@/components/Button/Button";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

// Icons
import { FiLock } from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaExternalLinkAlt, FaMapPin } from "react-icons/fa";
import { useRouter } from "next/router";

function ProjectInfo(data) {
  const [onGrab, setGrabbing] = useState(false);
  const { push } = useRouter();

  const downloadFiles = (event = undefined, gallery = []) => {
    event?.preventDefault();

    for (let i = 0; i < gallery.length; i++) {
      const image = gallery[i];
      
      if (image.type === "image") {
        const imageName = image.src.split("/")[2].replace(".png", "");

        console.log({ imageName });

        const link = document.createElement("a");
        link.href = image.src;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  const JSX = (
    <div className="ProjectInfoContainer">
      <div className="ProjectClose" onClick={() => push("/portfolio")}></div>

      <div className="ProjectInfo">
        <div className="topline">
          <span className="projectName">{data?.title}</span>

          <Button variant="outlined" href="/portfolio" rounded={5} style={{ fontSize: 18, padding: 10 }} cls="no-wrap" leftIcon={<IoIosClose size={30} />} />
        </div>

        {
          data?.gallery && (
            <div className="assets">
              <div className="projectAssets">Découvrez {data?.gallery.length} Ressources</div>
              <Button variant="outlined" onClick={e => downloadFiles(e, data?.gallery)} rounded={10}>Télécharger les images</Button>
            </div>
          )
        }

        {data?.gallery && (
          <ScrollContainer className="gallery" activationDistance={true} onStartScroll={() => setGrabbing(true)} onEndScroll={() => setGrabbing(false)} vertical={true}>
            {
              data.gallery.map((source, index) => {
                if (source.type === "video") {
                  return (
                    <iframe
                      className={onGrab ? "video grab" : "video"}
                      allowFullScreen
                      key={source.src}
                      src={`https://www.youtube.com/embed/${source.src}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  )
                } else if (source.type === "image") {
                  return (
                    <img src={source.src} key={source.src} alt={`image du Projet numéro ${index + 1} ${data?.title}`} draggable={false} className="image" />
                  )
                }
              })
            }
          </ScrollContainer>
        )}

        <div className="InfosContainer">
          <div className="leftInfos">
            <span className="iTitle">Description Projet</span>
            <p className="iDesc">
              {data?.desc}
            </p>
          </div>

          <div className="rightInfos">
            <span className="iTitle right">Infos Projet</span>

            <ul className="iList">
              <li className="iItem">
                <RiCalendarEventLine className="iIcon" />

                <span className="text">
                  Production: <span className="cat">{data?.publishedAt}</span>
                </span>
              </li>

              <li className="iItem">
                <FaMapPin className="iIcon" />

                <span className="text">
                  Catégorie: <span className="cat">{data?.category}</span>
                </span>
              </li>
            </ul>

            <div className="tags">
              {
                data?.tags.map(tag => <span className="tag" key={`tag_info_${tag}`}>{tag}</span>)
              }
            </div>
          </div>
        </div>

        <Button  
          leftIcon={data?.website ? <FaExternalLinkAlt /> : <FiLock/>} 
          disabled={!data?.website} 
          href={data?.website} 
          variant="outlined" 
          style={{ width: "fit-content", fontSize: 15, fontWeight: "600", margin: "0 auto 20px auto" }} 
          rounded={10}>VISITER LE SITE</Button>
      </div>
    </div>
  )

  return JSX;
}

export default ProjectInfo;