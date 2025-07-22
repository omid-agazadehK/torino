import React from "react";
import Icons from "./icons/Icons";
import { checkDateStatus, formatToPersianDate, numberFormat } from "@/util/helper";

function UserTours({ tour }) {
  const {
    startDate,
    endDate,
    title,
    fleetVehicle,
    origin,
    destination,
    price,
  } = tour;
  const idgen = () => {
    const min = Math.pow(10, 6 - 1);
    const max = Math.pow(10, 6) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const Status = checkDateStatus(startDate, endDate);
  return (
    <div className="relative rounded-xl border border-black/20 py-5">
      <span
        className={`${Status.class} absolute top-2 left-2 rounded-full px-2 py-0.5 text-[6px] sm:text-xs`}
      >
        {Status?.message}
      </span>
      <div className="grid grid-cols-12 space-y-6 px-4.5">
        <div className="col-span-5 flex gap-x-1 text-sm whitespace-nowrap md:col-span-6 lg:col-span-5">
          <Icons name="sun-fog" className="size-5" />
          <p>{title}</p>
        </div>
        <div className="col-span-7 flex space-x-2 text-sm whitespace-nowrap md:col-span-6 lg:col-span-7">
          <Icons name={fleetVehicle} className="size-5" />
          <p>سفر با {fleetVehicle}</p>
        </div>
        <div className="col-span-12 flex gap-x-2 text-sm whitespace-nowrap max-md:justify-between md:col-span-6 lg:col-span-5">
          <span className="font-vazir-semibold">
            {origin.name} به {destination.name}
          </span>
          <span className="font-number-light text-black/60">
            {formatToPersianDate(startDate)}
          </span>
        </div>
        <div className="col-span-12 flex gap-x-2 text-sm whitespace-nowrap max-md:justify-between md:col-span-6 lg:col-span-7">
          <span className="font-vazir-semibold">تاریخ برگشت</span>
          <span className="font-number-light text-black/60">
            {formatToPersianDate(endDate)}
          </span>
        </div>
      </div>
      <div className="flex items-center border-t border-black/20 px-2 pt-4 text-sm whitespace-nowrap sm:px-4.5">
        <div className="space-x-2 border-l border-black/20 pl-2 text-[10px] sm:pl-10 sm:text-base">
          <span className="text-black/50">شماره تور</span>
          <span className="font-number-medium">{idgen()}</span>
        </div>
        <div className="flex items-center gap-x-2 border-black/20 pr-2 text-[10px] sm:pr-10 sm:text-base">
          <span className="text-black/50">مبلغ پرداخت شده</span>
          <p className="font-number-medium">
            <span className="text-sm">{numberFormat(price)}</span>تومان
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserTours;
