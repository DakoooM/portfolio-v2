import { v4 as uuidv4 } from "uuid";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import Button from "../Button";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

export const CardAdvantageInfo = ({ desc, tooltip, uniqueId }) => {
  return (
    <div className="adv">
      <div className="icon_verif">
        <FaPlus className="icon" size={14} />
      </div>

      <p className="text">{desc}</p>

      <div className="icon_infos">
        <IoInformationCircleOutline
          className="icon"
          data-tooltip-id={uniqueId}
          size={30}
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
  price = 1299,
  advs = [],
  onSubmit = () => undefined
}) => {
  return (
    <article className="CardAdvantage">
      <h2 className="title">{children}</h2>
      <span className="from">A PARTIR DE</span>

      <span className="price">
        {price.toString()}<sup className="eur">€</sup>
      </span>

      <hr className="sep" />

      <div className="advantages">
        {
          advs.map(item => (
            <CardAdvantageInfo
              uniqueId={item.key}
              tooltip={item.tooltip}
              desc={item.desc}
              key={uuidv4()}
            />
          ))
        }
      </div>

      <hr className="sep" />

      <Button
        leftIcon={<FaRegNewspaper size={20} />}
        rounded={10}
        style={{ width: "80%", fontWeight: "bold" }}
        onClick={e => onSubmit(e)}>
        Demander un devis
      </Button>
    </article>
  )
}

export const CardAdvantagesContainer = ({ children }) => {
  return (
    <div className="CardAdvantagesContainer">
      {children}
    </div>
  )
}