import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarItem({
  to = "/home",
  label = undefined,
  children = undefined
}) {
  const { pathname } = useRouter();

  return (
    <Link className={to === pathname ? "NavbarItem active" : "NavbarItem"} href={to}>
      {children || label}
    </Link>
  )
}