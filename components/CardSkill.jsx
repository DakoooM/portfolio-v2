import Heading from "./Heading";

export const CardSkill = ({
  title = "Aucun",
  children = undefined,
  icon = () => {}
}) => {
  return (
    <article className="CardSkill">
      <div className="cardLeft">
        {icon(25, "cardIcon")}
      </div>

      <div className="cardRight">
        <Heading level={3} className="cardTitle">{title}</Heading>
        <p className="cardDesc">{children}</p>
      </div>
    </article>
  )
}

export const CardSkillContainer = ({ children }) => {
  return (
    <div className="CardSkillContainer">
      {children}
    </div>
  )
}