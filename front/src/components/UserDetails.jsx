"use client";
import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { useBasket } from "@/services/queries";
import Icons from "./icons/Icons";
import { miladToShamas, numberFormat, tourDays } from "@/util/helper";
import { useOrderCheckout } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { userSchema } from "@/schemas/userSchema";

function UserDetails() {
  const { data: basket, isPending, refetch } = useBasket();
  const { mutate } = useOrderCheckout();
  const router = useRouter();
  const toursDays = tourDays(basket?.startDate, basket?.endDate);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (inputData) => {
    const birthDate = miladToShamas(inputData.birthDate);
    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(birthDate);
    if (!birthDate || !isValidDate) {
      setError("birthDate", {
        type: "manual",
        message: "تاریخ تولد باید در قالب YYYY-MM-DD باشد",
      });
      return;
    }
    const finalData = { ...inputData, birthDate };
    mutate(finalData, {
      onSuccess: () => {
        router.push("/");
      },
      onError: (err) => console.log(err),
    });
  };

  useEffect(() => {
    refetch();
  }, []);

  if (isPending) {
    return (
      <div className="flex-1">
        <h1>hi</h1>
      </div>
    );
  }
  return (
    <main className="md:bg-white-f3 w-full flex-1 gap-x-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex h-full flex-col justify-center gap-x-2 gap-y-8 px-8 md:mt-9 md:flex-row md:items-start md:gap-y-2 lg:container lg:items-center lg:px-17 pb-9"
      >
        <section className="flex flex-col gap-y-4.5 rounded-xl border border-black/20 bg-white p-4 pb-7.5">
          <h4 className="flex gap-x-3 text-2xl">
            <Icons name="profile" className="text-text size-6" />
            مشخصات مسافر
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-6 max-lg:justify-center">
            <div className="flex w-63 flex-col">
              <input
                type="text"
                {...register("fullName")}
                className="text-text focus:outline-primary hover:border-primary rounded-sm border border-black/50 p-2"
                placeholder="نام و نام خانوادگی"
              />
              <p className="mt-1 h-5 text-sm text-red-500">
                {errors.fullName?.message}
              </p>
            </div>
            <div>
              <input
                type="text"
                {...register("nationalCode")}
                className="text-text focus:outline-primary hover:border-primary w-63 rounded-sm border border-black/50 p-2"
                placeholder="کدملی"
              />
              <p className="mt-1 h-5 text-sm text-red-500">
                {errors.nationalCode?.message}
              </p>
            </div>
            <div>
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
                    inputClass="border-black/50 text-text focus:outline-primary hover:border-primary w-63 rounded-sm border p-2"
                  />
                )}
              />
              <p className="mt-1 h-5 text-sm text-red-500">
                {errors.birthDate?.message}
              </p>
            </div>
            <div>
              <select
                {...register("gender")}
                className="focus:outline-primary hover:border-primary w-63 rounded-sm border border-black/50 p-2 px-2"
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
              <p className="mt-1 h-5 text-sm text-red-500">
                {errors.gender?.message}
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-1 flex-col justify-between rounded-xl border border-black/20 bg-white p-3 pt-4 lg:self-stretch">
          <div className="checkout-border flex justify-between pb-6">
            <span className="font-vazir-semibold text-2xl">
              {basket?.title}
            </span>
            <span className="text-text">
              {toursDays} روز و {toursDays - 1} شب
            </span>
          </div>
          <div className="text-text my-4 flex items-center justify-between">
            <span>قیمت نهایی</span>
            <p className="font-number-medium text-sm">
              <span className="text-complementry text-3xl">
                {numberFormat(basket?.price)}{" "}
              </span>
              تومان
            </p>
          </div>
          <button className="bg-primary rounded-xl px-14 py-2.5 text-2xl whitespace-nowrap text-white transition-colors duration-200 hover:bg-green-500">
            ثبت و خرید نهایی
          </button>
        </section>
      </form>
    </main>
  );
}

export default UserDetails;
