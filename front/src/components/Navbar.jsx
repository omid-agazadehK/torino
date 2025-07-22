import { links } from "@/constants/constants";
import MainLinks from "./MainLinks";

function Navbar() {
  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex items-center gap-6 xl:gap-20 lg:gap-9 font-vazir-medium text-text">
        {links.map((link) => (
          <MainLinks key={link.href} link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
