"use client";
import React, { useState } from "react";
import Icons from "./icons/Icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountDataSchema } from "@/schemas/userSchema";
import { useUser } from "@/services/queries";
import { useUpdateProfile } from "@/services/mutations";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function AccountDataForm() {
  const queryClient = useQueryClient();

  const { data } = useUser();
  const [detail, setDetail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(accountDataSchema) });
  const submit = (inputValue) => {
    const useAccoutData = { mobile: data.mobile, email: inputValue.email };
    mutate(useAccoutData, {
      onSuccess: (e) => {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        toast.success(e.message);
        setDetail(false);
      },
      onError: (err) => console.log(err),
    });
  };
  const { mutate, isPending } = useUpdateProfile();
  return (
    <div className="rounded-xl border border-black/20 px-3 pt-3 pb-7">
      <span>اطلاعات حساب کاربری</span>
      <div className="mt-7 flex w-full items-center justify-between gap-x-10 px-0 max-md:flex-wrap lg:px-5 xl:gap-x-0">
        <div className="flex h-11 w-full items-center gap-x-8 max-md:justify-between">
          <span className="profile-label whitespace-nowrap">شماره موبایل</span>
          <span className="font-number-medium text-text text-sm">
            {data?.mobile}
          </span>
        </div>
        <form
          onSubmit={handleSubmit(submit)}
          className={`flex w-full items-center justify-between ${detail ? "ap-x-4 h-15 gap-x-2" : "h-15 gap-x-2 xl:gap-x-30"}`}
        >
          {!detail ? (
            <>
              <div
                className={`flex items-center justify-between ${data.email ? "gap-x-2" : "gap-x-16"} xl:w-55`}
              >
                <span className="profile-label">ایمیل</span>
                <span className="truncate whitespace-nowrap max-md:text-sm">
                  {data.email ? data.email : "---"}
                </span>
              </div>
              <span
                onClick={() => setDetail(true)}
                className="text-complementry flex cursor-pointer items-center gap-x-2 text-sm hover:text-cyan-700"
              >
                <Icons name="edit" className="size-4" />
                افزودن
              </span>
            </>
          ) : (
            <>
              <div className="relative">
                <input
                  {...register("email")}
                  placeholder="ادرس ایمیل"
                  className="text-text focus:outline-primary hover:border-primary w-auto rounded-sm border border-black/50 p-2 placeholder:text-sm sm:w-55"
                />
                <span className="absolute right-0 -bottom-8 text-center text-xs whitespace-nowrap text-red-500 md:text-sm">
                  {errors?.email?.message}
                </span>
              </div>
              <button
                disabled={isPending}
                className={`${isPending && "cursor-not-allowed grayscale-100"} bg-primary font-vazir-semibold cursor-pointer rounded-lg px-5 py-2 text-white transition-colors duration-200 hover:bg-green-600 lg:px-14`}
              >
                تایید
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default AccountDataForm;
