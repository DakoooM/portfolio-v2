function SimpleBlob({ size = 100, fillColor = "#0F62FE", className="simpleBlob" }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill={fillColor} d="M43.6,-66.2C57.2,-67.8,69.3,-57.4,73.1,-44.4C76.9,-31.4,72.4,-15.7,70.3,-1.2C68.2,13.2,68.4,26.4,61.4,33.9C54.4,41.3,40,42.9,28.6,46.6C17.1,50.4,8.6,56.4,-3.4,62.3C-15.4,68.2,-30.8,74.1,-41.7,70C-52.6,65.9,-59,51.9,-61.7,38.5C-64.4,25.2,-63.4,12.6,-64.6,-0.7C-65.8,-14,-69.3,-28,-64.1,-36.9C-58.8,-45.8,-44.8,-49.6,-32.7,-49C-20.6,-48.3,-10.3,-43.1,2.4,-47.2C15,-51.3,30.1,-64.7,43.6,-66.2Z" transform="translate(100 100)" />
    </svg>
  )
}

export default SimpleBlob;
