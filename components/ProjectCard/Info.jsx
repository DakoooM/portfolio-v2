import { createPortal } from "react-dom";
import Button from "@/components/Button/Button";
import { IoIosClose } from "react-icons/io";
import { useContext, useEffect } from "react";
import { Inter } from "next/font/google";
import ProjectContext from "@/contexts/ProjectContext";
import ScrollContainer from "react-indiana-drag-scroll";

const inter = Inter({ subsets: ["latin"] });



function ProjectInfo() {
  const { show, setShow, data } = useContext(ProjectContext);

  useEffect(() => {
    if (show) {
      document.body.classList.add("ov-hidden");
    } else if (!show) {
      document.body.classList.remove("ov-hidden");
    }
  }, [show]);

  const JSX = (
    <div className={`ProjectInfoContainer${show ? " show" : ""}`}>
      <div className="ProjectClose" onClick={() => setShow(false)}></div>

      <div className={`ProjectInfo ${inter.className}`}>
        <div className="topline">
          <span className="projectName">{data?.title}</span>

          <Button variant="outlined" rounded={5} style={{ fontSize: 18 }} leftIcon={<IoIosClose size={30} />} onClick={() => setShow(false)}/>
        </div>

        <ScrollContainer className="gallery" activationDistance={true} vertical={true}>
          {
            data?.gallery.map(source => {
              if (source.type === "video") {
                return (
                  <iframe
                    className="video"
                    allowTransparency
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${source.src}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                )
              } else if (source.type === "image") {
                return (
                  <img src={source.src} alt={`image du Projet ${data?.title}`} draggable={false} className="image" />
                )
              }
            })
          }
        </ScrollContainer>

        <div className="InfosContainer">
          <div className="leftInfos">
            <span className="iTitle">Description Projet</span>
            <p className="iDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consequuntur corrupti veritatis eveniet praesentium! Eius eveniet corrupti nemo ipsam autem ex, consequatur similique corporis et veniam numquam tempora atque recusandae.
            </p>
          </div>

          <div className="rightInfos">
            <span className="iTitle right">Infos Projet</span>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(JSX, document.body);
}

export default ProjectInfo;