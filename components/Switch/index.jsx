function Switch({ 
  rounded = true, 
  leftLabel = undefined, 
  rightLabel = undefined,
  fontSize = 20,
  containerStyle = {},
  onChecked = () => undefined
}) {
  return (
    <div className="switch-row" style={{...containerStyle}}>
      {leftLabel && (<span style={{ fontSize: fontSize }} className="switch-label">{leftLabel}</span>)}

      <label className="Switch">
        <input type="checkbox" className="checkbox" onChange={e => onChecked(e)} />
        <span className={rounded ? "slider round" : "slider"}></span>
      </label>

      {rightLabel && (<span style={{ fontSize: fontSize }} className="switch-label">{rightLabel}</span>)}
    </div>
  )
}

export default Switch;