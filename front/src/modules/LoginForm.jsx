"use client";

import React, { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";

import Icons from "@/components/icons/Icons";
import { useLogin } from "@/services/mutations";
import Cookies from "js-cookie";
import { useUserAuth } from "@/contexts/AuthContext";
import toast from "react-hot-toast";
import { formatTime } from "@/util/helper";

function LoginForm({
  iconHandler,
  number,
  setNumber,
  error,
  setError,
  setAuthStep,
}) {
  const [otp, setOtp] = useState("");
  const { mutate: login } = useLogin();
  const { setIsLoggedIn } = useUserAuth();
  const [timeLeft, setTimeLeft] = useState(120);
  useEffect(() => {
    if (timeLeft === 0) {
      setAuthStep("register");
      setNumber("");
      setError("");
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const onSuccessHandler = (res) => {
    toast.success("با موفقیت وارد شدید");
    Cookies.set("accessToken", res.accessToken, {
      expires: 30,
    });
    Cookies.set("refreshToken", res.refreshToken, {
      expires: 360,
    });
    setError({});
    setIsLoggedIn(true);
    setAuthStep(null);
    setNumber("");
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (otp.length < 6) return;
    login(
      { number, otp },
      {
        onSuccess: (res) => {
          onSuccessHandler(res);
        },
        onError: (err) =>
          setError((error) => ({
            ...error,
            loginError: err.response.data.message,
          })),
      },
    );
  };

  return (
    <>
      <form onSubmit={loginHandler} className="flex flex-col">
        <Icons
          name={"line-arrow"}
          className="bg bg absolute top-2 left-2 size-8 rotate-180"
          onclick={() => iconHandler("register")}
        />
        <p className="font-vazir-semibold text-text my-10 text-center text-xl sm:text-3xl">
          کد تایید را وارد کنید.
        </p>
        <div>
          <p className="font-number-medium text-text mb-3 text-center text-sm md:text-base">
            کد تایید به شماره {number} ارسال شد
          </p>
          <OtpInput
            value={otp}
            onChange={(e) => setOtp(e)}
            isInputNum={true}
            inputType="tel"
            numInputs={6}
            className="otp-container"
            containerStyle="flex justify-center items-center  gap-x-2 font-number-medium -scale-x-100"
          />
          <p className="mt-2 text-red-500">
            {error?.loginError && error?.loginError}
          </p>
        </div>
        <span className="font-number-light text-text mx-auto text-xs">
          {formatTime(timeLeft)} تا ازسال مجدد کد{" "}
        </span>
        <button
          type="submit"
          className="bg-primary font-vazir-medium mt-10 w-full rounded-lg py-3.5 text-lg text-white"
        >
          ورود به تورینو
        </button>
      </form>
    </>
  );
}

export default LoginForm;
