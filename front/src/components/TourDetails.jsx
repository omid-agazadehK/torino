
import Image from "next/image";
import React from "react";
import Icons from "./icons/Icons";
import { faDate, numberFormat, tourDays } from "@/util/helper";

import AddBasketButton from "./AddBasketButton";
function TourDetails({ tour }) {
  const {
    availableSeats,
    origin,
    startDate,
    endDate,
    image,
    id,
    fleetVehicle,
    insurance,
    title,
    price,
  } = tour;
  const toursDays = tourDays(startDate, endDate);

  return (
    <main className="md:bg-white-f3 flex flex-1 items-center justify-center md:px-2">
      <div className="flex flex-col items-start border-black/20 bg-white px-6 py-7.5 md:w-270 md:rounded-xl md:border">
        <div className="flex h-66 w-full flex-1 flex-col items-center justify-center gap-x-6 md:flex-row">
          <Image
            src={image}
            alt={title}
            priority
            width={600}
            height={600}
            className="h-66 w-full rounded-xl object-cover md:w-100"
          />
          <div className="flex h-full w-full flex-1 flex-col justify-around gap-y-6 max-md:mt-4">
            <div className="flex flex-row justify-between gap-y-4 max-md:items-center md:flex-col">
              <h2 className="font-vazir-semibold text-2xl text-black md:text-3xl">
                {title}
              </h2>
              <span className="font-number-light text-text">
                {toursDays} روز و {toursDays - 1} شب
              </span>
            </div>

            <div className="text-gray-7d flex items-center justify-between gap-x-2 text-xs md:flex-wrap md:text-base lg:gap-x-6 lg:text-xl">
              <span className="flex p-2 md:gap-x-2">
                <Icons name="user-tick" className="size-3.5 md:size-6" />
                تورلیدر از مبدا
              </span>
              <span className="flex gap-x-2 p-2">
                <Icons name="map" className="size-3.5 md:size-6" />
                برنامه سفر
              </span>
              <span className="flex gap-x-2 p-2">
                <Icons name="medal-star" className="size-3.5 md:size-6" />
                تضمین کیفیت
              </span>
            </div>
            <div className="hidden w-full grid-cols-3 max-md:grid">
              <div className="text-stone-44 text-center">
                <span className="text-stone-44 flex items-center justify-center gap-x-2 py-2">
                  <Icons name="bus" className="size-5" />
                  حمل و نقل
                </span>
                <span className="font-vazir-medium">{fleetVehicle}</span>
              </div>

              <div className="text-stone-44 text-center">
                <span className="text-stone-44 flex items-center justify-center gap-x-2 py-2">
                  <Icons name="profile-2user" className="size-5" />
                  ظرفیت
                </span>
                <span className="font-vazir-medium">
                  حداکثر {availableSeats} نفر
                </span>
              </div>

              <div className="text-stone-44 text-center">
                <span className="flex items-center justify-center gap-x-2 py-2">
                  <Icons name="security" className="size-5" />
                  بیمه
                </span>
                <span className="font-vazir-medium block">
                  {insurance ? "دارد" : "ندارد"}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-text/80 font-number-medium text-sm">
                <span className="text-complementry ml-1 text-2xl lg:text-3xl">
                  {numberFormat(price)}
                </span>
                تومان
              </p>
              <AddBasketButton id={id} />
            </div>
          </div>
        </div>
        <div className="mt-7.5 hidden w-full grid-cols-5 space-y-1 md:grid lg:grid-cols-6">
          <div className="details">
            <span className="text-stone-44 flex items-center gap-x-2 py-2 text-lg">
              <Icons name="routing" className="size-5" />
              مبدا
            </span>
            <span className="font-vazir-medium">{origin.name}</span>
          </div>

          <div className="details">
            <span className="text-stone-44 flex items-center gap-x-2 py-2 text-lg whitespace-nowrap">
              <Icons name="calendar" className="size-5" />
              تاریخ رفت
            </span>
            <span className="font-vazir-medium">{faDate(startDate)}</span>
          </div>

          <div className="details">
            <span className="text-stone-44 flex items-center gap-x-2 py-2 text-lg">
              <Icons
                name="calendar"
                className="fill-stone-44 size-5 text-white"
              />
              تاریخ برگشت
            </span>
            <span className="font-vazir-medium">{faDate(endDate)}</span>
          </div>

          <div className="details">
            <span className="text-stone-44 flex items-center gap-x-2 py-2 text-lg">
              <Icons name="bus" className="size-5" />
              حمل و نقل
            </span>
            <span className="font-vazir-medium">{fleetVehicle}</span>
          </div>

          <div className="details">
            <span className="text-stone-44 flex items-center gap-x-2 py-2 text-lg">
              <Icons name="profile-2user" className="size-5" />
              ظرفیت
            </span>
            <span className="font-vazir-medium">
              حداکثر {availableSeats} نفر
            </span>
          </div>

          <div>
            <span className="text-stone-44 hidden items-center gap-x-2 py-2 text-lg lg:flex">
              <Icons name="security" className="size-5" />
              بیمه
            </span>
            <span className="font-vazir-medium hidden lg:block">
              {insurance ? "دارد" : "ندارد"}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TourDetails;
