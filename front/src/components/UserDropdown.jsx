"use client";
import React, { useRef } from "react";
import Icons from "./icons/Icons";
import { useUserAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import Cookies from "js-cookie";
import useDrop from "@/hook/useDrop";
import { useClickOutside } from "@/hook/useClickOutside";
import { useAuth } from "@/services/queries";
import { usePathname, useRouter } from "next/navigation";
function UserDropdown() {
  const pathName = usePathname();
  const router = useRouter();
  const { openDropdownId, setOpenDropdownId } = useDrop();

  const { data } = useAuth();
  const ref = useRef();
  useClickOutside(ref, () => setOpenDropdownId(null));
  const { setIsLoggedIn } = useUserAuth();
  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setIsLoggedIn(false);
    setOpenDropdownId(false);
    if (pathName === "/") return;
    router.replace("/");
  };
  if (openDropdownId !== "profile") return null;
  return (
    <div
      ref={ref}
      className="absolute top-full left-0 z-50 mt-4 max-h-50 w-50 overflow-y-auto rounded-xl border border-black/30 bg-white lg:w-60"
    >
      <div className="flex w-full items-center gap-x-2 bg-stone-100 px-2">
        <span className="relative size-7 rounded-full bg-stone-300">
          <Icons
            name="profile"
            className="text-gray-59 absolute top-1/2 left-1/2 size-4 -translate-x-1/2 -translate-y-1/2"
          />
        </span>
        <p className="font-number-medium text-text/70 max:lg:text-sm rounded-t-xl py-2">
          {data?.mobile}
        </p>
      </div>
      <Link
        onClick={() => setOpenDropdownId(false)}
        href={"/profile"}
        prefetch={false}
        className="text-text transition-color flex gap-x-2 px-3 py-4 text-xs duration-200 hover:bg-gray-50 md:py-2 md:text-sm"
      >
        <Icons name="empty-profile" className="text-text size-4 md:size-5" />
        اطلاعات حساب
      </Link>
      <span
        onClick={() => logout()}
        className="transition-color flex cursor-pointer gap-x-2 px-3 py-2 text-sm text-red-600 duration-200 hover:bg-gray-50 md:py-4"
      >
        <Icons
          name="mini-logout"
          className="size-4 stroke-red-600 text-red-600 md:size-5"
        />
        خروج از حساب کاربری
      </span>
    </div>
  );
}

export default UserDropdown;
