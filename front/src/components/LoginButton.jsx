import React from "react";
import Icons from "./icons/Icons";
function LoginButton({ setAuthStep }) {
  return (
    <button
      onClick={() => setAuthStep("register")}
      className="font-number-medium text-primary hover:bg-primary/20 sm:hover:bg-primary sm:*:fill-primary border-primary flex items-center gap-2 rounded-lg border-2 p-2 text-lg transition-colors duration-200 hover:text-white sm:px-4 sm:py-2 sm:hover:*:fill-white"
    >
      <Icons className="size-6 fill-none sm:hidden" name="login" />

      <Icons name="profile" className="h-6 w-6 max-sm:hidden" />
      <span className="max-sm:hidden">ورود | ثبت نام</span>
    </button>
  );
}

export default LoginButton;
