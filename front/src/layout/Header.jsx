"use client";
import Icons from "@/components/icons/Icons";
import React from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { useState } from "react";
import { useUserAuth } from "@/contexts/AuthContext";
import LoginButton from "@/components/LoginButton";
import AuthModal from "@/modules/AuthModal";
import useDrop from "@/hook/useDrop";
import UserDropdown from "@/components/UserDropdown";

function Header() {
  const [isSideBar, setIsSideBar] = useState(false);
  const [authStep, setAuthStep] = useState(null);
  const { setOpenDropdownId } = useDrop();
  const { isLoggedIn } = useUserAuth();

  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow">
      <AuthModal setAuthStep={setAuthStep} authStep={authStep} />
      <SideBar setIsSideBar={setIsSideBar} isSideBar={isSideBar} />
      <div className="container flex items-center justify-between px-5 py-3.5 lg:px-31.5">
        <Icons
          onclick={() => setIsSideBar(true)}
          className="size-5 sm:size-10 md:hidden"
          name="hamburger"
        />
        <div className="flex items-center gap-14 lg:gap-21">
          <Image
            priority
            src="/images/Torino.png"
            alt="لوگوی سایت"
            width={150}
            height={40}
            className="hidden h-11 w-36.5 md:block"
          />
          <Navbar />
        </div>

        {isLoggedIn && (
          <div className="relative">
            <div
              onClick={() => setOpenDropdownId("profile")}
              className="text-primary relative flex cursor-pointer items-center justify-center gap-1"
            >
              <Icons className="size-6" name="profile" />
              <span className="font-number-medium text-sm">09224526847</span>
              <Icons className="size-6" name="arrow-down" />
            </div>
            <UserDropdown />
          </div>
        )}

        {!isLoggedIn && <LoginButton setAuthStep={setAuthStep} />}
      </div>
    </header>
  );
}

export default Header;
