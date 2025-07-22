"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "./icons/Icons";
function SideLinks({ link }) {
  const pathname = usePathname();
  return (
    <li
      key={link.href}
      className={`font-vazir-medium mt-8 mr-3 flex gap-2 ${
        pathname === link.href ? "text-primary" : "text-text"
      } `}
    >
      <Icons name={link.svgName} className="size-4" />
      <Link href={link.href} prefetch={false}>
        {link.label}
      </Link>
    </li>
  );
}

export default SideLinks;
