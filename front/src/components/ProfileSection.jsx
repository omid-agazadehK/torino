import { useSelectSection } from "@/contexts/SectionContext";
import React from "react";
import Icons from "./icons/Icons";

function ProfileSection() {
  const { sectionId, setSectionId } = useSelectSection();

  return (
    <div className="mb-2 flex min-w-40 items-center border-b border-black/20 md:h-42 md:flex-col md:rounded-xl md:border lg:min-w-50">
      <div
        onClick={() => setSectionId("profile")}
        className={`${sectionId === "profile" ? "md:bg-primary/25 text-primary" : ""} flex w-full items-center gap-x-2 px-1 py-4 text-base sm:px-4.5`}
      >
        <Icons name="profile" className="size-5" />
        <span className="whitespace-nowrap">پروفایل</span>
      </div>
      <div
        onClick={() => setSectionId("tours")}
        className={`${sectionId === "tours" ? "md:bg-primary/25 text-primary fill-primary" : ""} flex w-full items-center gap-x-2 px-1 py-4 text-base sm:px-4.5`}
      >
        <Icons name="sun-fog" className="size-5" />
        <span className="whitespace-nowrap">تور های من</span>
      </div>
      <div
        onClick={() => setSectionId("transactions")}
        className={`${sectionId === "transactions" ? "md:bg-primary/25 text-primary" : " "} flex w-full items-center gap-x-2 px-1 py-4 text-base sm:px-4.5`}
      >
        <Icons name="convert-card" className="size-5" />
        <span className="whitespace-nowrap">تراکنش ها</span>
      </div>
    </div>
  );
}

export default ProfileSection;
