"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function MainLinks({ link }) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={`${
          pathname === link.href && "text-primary"
        } hover:text-primary transition-colors duration-200`}
        href={link.href}
      >
        {link.label}
      </Link>
    </li>
  );
}

export default MainLinks;
