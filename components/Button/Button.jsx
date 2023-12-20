import Link from "next/link";
import Spinner from "../Spinner/simple";

function Button({
  _type = "button",
  href = undefined,
  bgColor = undefined,
  cls = "",
  variant = "contained", /* contained, outlined */
  type = "primary",
  children = undefined,
  label = undefined,
  leftIcon = undefined,
  rightIcon = undefined,
  disabled = false,
  rounded = 0,
  isLoading = false,
  style = {},
  onClick = () => undefined,
  ...props
}) {
  const disabledClasse = disabled ? " disabled" : "";
  const ButtonCls = `Button ${disabledClasse} ${type} ${cls} ${!bgColor ? variant : ""}`;
  const ButtonStyles = { borderRadius: rounded, backgroundColor: bgColor, ...style };

  if (href) {
    return <Link href={href} className={ButtonCls} style={ButtonStyles} onClick={e => onClick(e)} {...props}>
      {leftIcon} {children || label} {rightIcon}
    </Link>
  }

  return (
    <button type={_type} disabled={disabled} className={ButtonCls} style={ButtonStyles} onClick={e => onClick(e)} {...props}>
      {leftIcon ? (!isLoading ? leftIcon : <Spinner color="#8f8f8f"/>) : undefined}

      {children || label}

      {rightIcon ? (!isLoading ? rightIcon : <Spinner color="#8f8f8f"/>) : undefined}
    </button>
  )
}

export default Button;