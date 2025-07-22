"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Icons from "./icons/Icons";
import { useUser } from "@/services/queries";
import { userBankSchema } from "@/schemas/userSchema";
import { useBankData } from "@/services/mutations";

function BankDataForm() {
  const [detail, setDetail] = useState(false);
  const { data } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userBankSchema) });
  const { mutate, isPending } = useBankData();

  const submit = (inputValue) => {
    const birthDate = { payment: { ...inputValue } };
    console.log(birthDate);

    mutate(birthDate, {
      onSuccess: (e) => {
        toast.success(e.message);
        setDetail(false);
      },
      onError: (err) => console.log(err),
    });
  };
  return (
    <div className="rounded-xl border border-black/20 pt-3">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex items-center justify-between px-3">
          <span>اطلاعات حساب بانکی</span>
          <span
            onClick={() => setDetail(true)}
            className="text-complementry flex cursor-pointer items-center gap-x-2 text-sm hover:text-cyan-700"
          >
            <Icons name="edit" className="size-4" />
            ویرایش اطلاعات
          </span>
        </div>
        {!detail && (
          <div className="mt-7 mb-8.5 grid grid-cols-12 gap-y-7 px-3">
            <div className="col-span-12 flex w-full items-center justify-between gap-x-16 max-md:mx-auto md:col-span-6 md:w-55">
              <span className="profile-label whitespace-nowrap">شماره شبا</span>
              <span>
                {data?.payment?.shaba_code ? data?.payment?.shaba_code : "---"}
              </span>
            </div>
            <div className="col-span-12 flex w-full items-center justify-between gap-x-16 max-md:mx-auto md:col-span-6 md:w-55">
              <span className="profile-label whitespace-nowrap">
                شماره کارت
              </span>
              <span className="font-number-light">
                {data?.payment?.debitCard_code
                  ? data?.payment?.debitCard_code
                  : "---"}
              </span>
            </div>
            <div className="col-span-12 flex w-full items-center justify-between gap-x-16 max-md:mx-auto md:col-span-6 md:w-55">
              <span className="profile-label whitespace-nowrap">
                شماره حساب
              </span>
              <span>
                {data?.payment?.accountIdentifier
                  ? data?.payment?.accountIdentifier
                  : "---"}
              </span>
            </div>
          </div>
        )}
        {detail && (
          <div className="mt-7 mb-8.5 flex flex-wrap max-md:justify-center items-center gap-x-4 gap-y-4 px-3">
            <div className="flex flex-col gap-y-1">
              <input
                {...register("shaba_code")}
                placeholder="شماره شبا"
                className="text-text focus:outline-primary hover:border-primary w-66 rounded-sm border border-black/50 p-2 placeholder:text-sm"
              />
              <span className="text-xs text-center whitespace-nowrap text-red-500 md:text-sm">
                {errors?.shaba_code?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-1">
              <input
                {...register("debitCard_code")}
                placeholder="شماره کارت"
                className="text-text focus:outline-primary hover:border-primary w-66 rounded-sm border border-black/50 p-2 placeholder:text-sm"
              />
              <span className="text-xs text-center whitespace-nowrap text-red-500 md:text-sm">
                {errors?.debitCard_code?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-1">
              <input
                {...register("accountIdentifier")}
                placeholder="شماره حساب"
                className="text-text focus:outline-primary hover:border-primary w-66 rounded-sm border border-black/50 p-2 placeholder:text-sm"
              />
              <span className="text-xs text-center whitespace-nowrap text-red-500 md:text-sm">
                {errors?.accountIdentifier?.message}
              </span>
            </div>
          </div>
        )}
        {detail && (
          <div className="flex items-center justify-end gap-x-3 border-t border-black/20 px-8 py-2">
            <button
              type="submit"
              disabled={isPending}
              className={`${isPending && "cursor-not-allowed grayscale-100"} bg-primary font-vazir-semibold cursor-pointer rounded-lg sm:px-14 px-7 py-2 text-white transition-colors duration-200 hover:bg-green-700`}
            >
              تایید
            </button>
            <button
              onClick={() => {
                reset();
                setDetail(false);
              }}
              type="button"
              className={`border-primary text-primary font-vazir-semibold cursor-pointer rounded-lg border-2 sm:px-14 px-7  py-2 transition-colors duration-200 hover:bg-green-200`}
            >
              انصراف
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default BankDataForm;
