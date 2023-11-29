function SimpleSpinner({ size = 25, color = "white", borderSize = 3 }) {
  return <span className="simpleLoader" style={
    { 
      width: size, 
      height: size, 
      border: `${borderSize}px solid ${color}`, 
      borderBottomColor: "transparent"
    }
  }></span>
}

export default SimpleSpinner;