import React, { useRef, useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useClickOutside } from "@/hook/useClickOutside";

function AuthModal({ setAuthStep, authStep }) {
  const [number, setNumber] = useState("");
  const [error, setError] = useState({ registerError: "", loginError: "" });
  const ref = useRef(null);
  const iconHandler = (logState) => {
    setAuthStep(logState);
    setNumber("");
    setError("");
  };
  const clickOutSideHandler = () => {
    setAuthStep(null);
    setNumber("");
    setError("");
  };
  
  useClickOutside(ref, clickOutSideHandler);
  if (!authStep) return null;
  return (
    <>
      <div className="fixed z-40 h-dvh w-dvw bg-black/25"></div>
      <div
        ref={ref}
        className="rounded-2xl-5 fixed top-1/2 left-1/2 z-50 -translate-x-1/2 min-w-80 -translate-y-1/2 bg-white sm:p-10 p-5 md:min-h-100 md:min-w-xl"
      >
        {authStep === "register" && (
          <RegisterForm
            setAuthStep={setAuthStep}
            setError={setError}
            number={number}
            setNumber={setNumber}
            error={error}
            iconHandler={iconHandler}
          />
        )}
        {authStep === "code" && (
          <LoginForm
            setAuthStep={setAuthStep}
            iconHandler={iconHandler}
            number={number}
            setNumber={setNumber}
            error={error}
            setError={setError}
          />
        )}
      </div>
    </>
  );
}

export default AuthModal;
