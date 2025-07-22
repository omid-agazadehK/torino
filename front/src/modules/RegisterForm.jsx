import Icons from "@/components/icons/Icons";
import { useRegister } from "@/services/mutations";
import React from "react";
import toast from "react-hot-toast";
import { Oval, RotatingLines } from "react-loader-spinner";

function RegisterForm({
  iconHandler,
  setError,
  setAuthStep,
  number,
  setNumber,
  error,
}) {
  const { mutate: register, isPending } = useRegister();

  const sendCode = (e) => {
    e.preventDefault();
    if (!number) return;
    const regex = /^09\d{9}$/;
    if (!regex.test(number)) {
      setError((error) => ({
        ...error,
        registerError: "شماره موبایل نادرست است",
      }));
      return;
    }
    setError("");
    register(number, {
      onSuccess: (res) => {
        toast.success(res.message + " " + res.code, { duration: 10000 });
        setAuthStep("code");
      },
      onError: (err) => {
        toast.error("مشکلی پیش آمد، لطفاً دوباره تلاش کنید.");
      },
    });
  };

  if (isPending)
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  return (
    <>
      <form onSubmit={sendCode}>
        <Icons
          name={"cross"}
          className="absolute top-2 left-2 size-10 md:top-0 md:left-0 md:size-14"
          onclick={() => iconHandler(null)}
        />
        <p className="font-vazir-semibold text-text my-10 text-center text-xl md:text-3xl">
          ورود به تورینو
        </p>
        <div className="">
          <span className="font-vazir-light text-text">
            شماره موبایل خود را وارد کنید
          </span>
          <input
            type="text"
            name="phoneNumber"
            value={number}
            className={`font-number-medium mt-3 w-full rounded-md border px-2 py-4 outline-none ${error?.registerError ? "border-red-500" : "border-black/25"}`}
            placeholder="5123****0912"
            onChange={(e) => setNumber(e.target.value)}
          />
          <p className="mt-2 text-red-500">
            {error?.registerError && error?.registerError}
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-primary font-vazir-medium mt-10 flex w-full items-center justify-center rounded-lg py-3.5 text-lg text-white"
        >
          {isPending ? (
            <Oval
              visible={true}
              height="30"
              width="30"
              color="blue"
              ariaLabel="oval-loading"
            />
          ) : (
            " ارسال کد تایید"
          )}
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
