import { v4 as uuidv4 } from "uuid";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import Button from "../Button/Button";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import ModalContext from "@/contexts/ModalContext";
import { useContext } from "react";
import { CardsAdvantagesModal } from "@/global.config";

export const CardAdvantageInfo = ({ add, desc, tooltip, uniqueId }) => {
  return (
    <div className="adv">
      <div className="icon_verif">
        {add ? <FaPlus className="icon" size={14} /> : <FaMinus className="icon rmv" size={14}/>}
      </div>

      <p className="text">{desc}</p>

      <div className="icon_infos">
        <IoInformationCircleOutline
          className="icon"
          data-tooltip-id={uniqueId}
          size={25}
        />
      </div>

      <Tooltip
        style={{ 
          maxWidth: 250, 
          borderRadius: 10, 
          backgroundColor: "rgba(0 0 0 / 80%)", 
          userSelect: "none"
        }}
        content={tooltip}
        id={uniqueId}
      />
    </div>
  )
}

export const CardAdvantage = ({
  children = undefined,
  type = "standard",
  price = 1299,
  advs = [],
  cardKey = 0,
  ttc = true
}) => {
  const { 
    setShowModal,
    setModalTitle, 
    setModalContent
  } = useContext(ModalContext);

  const onSubmit = (event, type) => {
    event?.preventDefault();

    const info = CardsAdvantagesModal[type];

    if (info) {
      setModalTitle(info.title);
      setModalContent(info.element);
      setShowModal(true);
    }
  }

  return (
    <article className="CardAdvantage">
      <h2 className="title">{children}</h2>
      <span className="from">A PARTIR DE</span>

      <span className="price">
        {price.toString()}<sup className="eur">€</sup><sup className="ttc">{ttc ? "TTC" : "HT"}</sup>
      </span>

      <hr className="sep" />

      <div className="advantages">
        {
          advs.map((item, advIndex) => {
            const unique = `card_${cardKey}_${advIndex}`;

            return (
              <CardAdvantageInfo
                add={item.add}
                uniqueId={unique}
                key={unique}
                tooltip={item.tooltip}
                desc={item.desc}
              />
            )
          })
        }
      </div>

      <hr className="sep" />

      <Button
        leftIcon={<FaRegNewspaper size={20} />}
        rounded={10}
        style={{ width: "80%", fontWeight: "bold", fontSize: 15 }}
        onClick={e => onSubmit(e, type)}>
        Demander un devis
      </Button>
    </article>
  )
}

export const CardAdvantagesContainer = ({ mTop = 0, mBottom = 0, children = undefined }) => {
  return (
    <div className="CardAdvantagesContainer" style={{ marginTop: mTop, marginBottom: mBottom}}>
      {children}
    </div>
  )
}