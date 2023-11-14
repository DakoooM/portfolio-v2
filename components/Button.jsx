import Link from "next/link";

function Button({
  href = undefined,
  variant = "contained",
  type = "primary",
  children = undefined,
  label = undefined,
  leftIcon = undefined,
  rightIcon = undefined,
  disabled = false,
  rounded = 0,
  ...props
}) {
  const disabledClasse = disabled ? " disabled" : "";

  if (href) {
    return <Link href={href} className={`Button ${type} ${variant}${disabledClasse}`} style={{ borderRadius: rounded }} {...props}>
      {leftIcon} {children || label} {rightIcon}
    </Link>
  }

  return (
    <button className={`Button ${type} ${variant}${disabledClasse}`} style={{ borderRadius: rounded }} {...props}>
      {leftIcon} {children || label} {rightIcon}
    </button>
  )
}

export default Button;