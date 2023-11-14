function Section({ 
  width, 
  height, 
  mHeight, 
  className, 
  uniqueId, 
  children, 
  ...props 
}) {
  return (
    <section className={className} id={uniqueId} {...props} style={{ width: width, height: height, minHeight: mHeight }}>
      {children}
    </section>
  )
}

export default Section;