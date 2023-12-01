function Switch({ 
  rounded = true, 
  leftLabel = "Prix HT (Hors Taxes)", 
  fontSize = 20,
  onChecked = () => undefined
}) {
  return (
    <div className="switch-row">
      <span style={{ fontSize: fontSize }} className="switch-label">{leftLabel}</span>

      <label className="Switch">
        <input type="checkbox" className="checkbox" onChange={e => onChecked(e)} />
        <span className={rounded ? "slider round" : "slider"}></span>
      </label>
    </div>
  )
}

export default Switch;