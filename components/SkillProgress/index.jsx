export function SkillProgress({ 
  lang = "javascript", 
  icon = () => undefined, 
  rotate = 0,
  info = undefined,
  height = 7,
  colors = ["#FFCA28", "#ffd028"],
  percent = 50
}) {
  const customBackground = `linear-gradient(${rotate}deg, ${colors[0]}, ${colors[1]})`;

  return (
    <div className="SkillProgress">
      <span className="label">{lang}</span>

      <div className="progress-row">
        {icon(info, { color: colors[0] })}

        <div className="progress" style={{ background: `${colors[0]}7F`, height: height }}>
          <span className="bar" style={{ background: customBackground, width: `${percent}%` }}></span>
        </div>
      </div>
    </div>
  )
}

export function SkillProgressContainer({ children }) {
  return (
    <div className="SkillProgressContainer">{children}</div>
  )
}