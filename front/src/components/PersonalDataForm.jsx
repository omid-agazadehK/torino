"use client";
import { userProfileSchema } from "@/schemas/userSchema";
import { usePersonalData } from "@/services/mutations";
import { useUser } from "@/services/queries";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Icons from "./icons/Icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { miladToShamas, shmasToMilad } from "@/util/helper";

function PersonalDataForm() {
  const { data } = useUser();
  const { mutate, isPending } = usePersonalData();
  const [detail, setDetail] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userProfileSchema) });

  const submit = (inputValue) => {
    const birthDate = miladToShamas(inputValue.birthDate);

    mutate(
      { ...inputValue, birthDate },
      {
        onSuccess: (e) => {
          toast.success(e.message);
          setDetail(false);
        },
        onError: (err) => console.log(err),
      },
    );
  };
  return (
    <div className="rounded-xl border border-black/20 pt-3">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex items-center justify-between px-3">
          <span>اطلاعات شخصی</span>
          <span
            onClick={() => setDetail(true)}
            className="text-complementry flex cursor-pointer items-center gap-x-2 text-sm hover:text-cyan-700"
          >
            <Icons name="edit" className="size-4" />
            ویرایش اطلاعات
          </span>
        </div>
        {!detail && (
          <div className="mt-7 mb-8.5 grid grid-cols-12 gap-x-2 gap-y-7 px-3">
            <div className="col-span-12 flex items-center justify-between gap-x-4 sm:col-span-6 sm:w-55 sm:gap-x-16">
              <span className="profile-label whitespace-nowrap">
                نام و نام خانوادگی
              </span>
              <span>{data?.fullName ? data?.fullName : "---"}</span>
            </div>
            <div className="col-span-12 flex items-center justify-between gap-x-4 sm:col-span-6 sm:w-55 sm:gap-x-16">
              <span className="profile-label">کدملی</span>
              <span className="font-number-light">
                {data?.nationalCode ? data?.nationalCode : "---"}
              </span>
            </div>
            <div className="col-span-12 flex items-center justify-between gap-x-4 sm:col-span-6 sm:w-55 sm:gap-x-16">
              <span className="profile-label whitespace-nowrap">جنسیت</span>
              <span>
                {data.gender ? (data.gender === "male" ? "مرد" : "زن") : "---"}
              </span>
            </div>
            <div className="col-span-12 flex items-center justify-between gap-x-4 sm:col-span-6 sm:w-55 sm:gap-x-16">
              <span className="profile-label whitespace-nowrap">
                تاریخ تولد
              </span>
              <span className="font-number-light">
                {data.birthDate ? shmasToMilad(data?.birthDate) : "---"}
              </span>
            </div>
          </div>
        )}
        {detail && (
          <div className="mt-3 mb-2 flex flex-wrap items-center gap-x-4 gap-y-4 px-3 max-lg:justify-center">
            <div className="flex flex-col gap-y-1">
              <input
                {...register("fullName")}
                placeholder="نام و نام خانوادگی"
                className="text-text focus:outline-primary hover:border-primary w-66 rounded-sm border border-black/50 p-2 placeholder:text-sm"
              />

              <span className="text-xm h-5 text-center whitespace-nowrap text-red-500 md:text-sm">
                {errors?.fullName?.message}
              </span>
            </div>
            <div className="flex flex-col gap-y-1">
              <input
                {...register("nationalCode")}
                placeholder="کدملی"
                className="text-text focus:outline-primary hover:border-primary w-66 rounded-sm border border-black/50 p-2 placeholder:text-sm"
              />
              <span className="text-xm h-5 text-center whitespace-nowrap text-red-500 md:text-sm">
                {errors?.nationalCode?.message}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1 lg:mt-0.5">
              <Controller
                name="birthDate"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    value={field.value}
                    onChange={(dateObj) => field?.onChange(dateObj)}
                    format="YYYY-MM-DD"
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    placeholder="تاریخ تولد"
                    inputClass="border-black/50 text-text focus:outline-primary hover:border-primary w-66 rounded-sm border p-2"
                  />
                )}
              />
              <p className="mt-1 h-5 text-sm text-red-500">
                {errors.birthDate?.message}
              </p>
            </div>
            <select
              {...register("gender")}
              className="focus:outline-primary hover:border-primary mb-7 w-66 rounded-sm border border-black/50 p-1.5 px-2"
            >
              <option value="" className="text-black/50">
                انتخاب کنید
              </option>
              <option value="male" className="text-black">
                مرد
              </option>
              <option value="female" className="text-black">
                زن
              </option>
            </select>
          </div>
        )}
        {detail && (
          <div className="flex items-center justify-end gap-x-3 border-t border-black/20 px-6 py-2">
            <button
              type="submit"
              disabled={isPending}
              className={`${isPending && "cursor-not-allowed grayscale-100"} bg-primary font-vazir-semibold cursor-pointer rounded-lg px-10 py-2 text-white transition-colors duration-200 hover:bg-green-700 sm:px-14`}
            >
              تایید
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setDetail(false);
              }}
              className={`border-primary text-primary font-vazir-semibold cursor-pointer rounded-lg border-2 px-7 py-1.5 transition-colors duration-200 hover:bg-green-200 sm:px-14`}
            >
              انصراف
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default PersonalDataForm;
