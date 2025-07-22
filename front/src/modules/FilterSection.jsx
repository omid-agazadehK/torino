"use client";
import React, { useEffect, useState } from "react";
import Icons from "@/components/icons/Icons";
import { useTours } from "@/services/queries";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import DateObject from "react-date-object";
import { miladToShamas, shmasToMilad } from "@/util/helper";

export default function FilterSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [origin, setOrigin] = useState("مبدا");
  const [destination, setDestination] = useState("مقصد");
  const [startDate, setStartDate] = useState();
  const { data } = useTours({ startDate, destination, origin });

  const originsFilter = data
    ?.map((item) => item.origin)
    .filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });
  const destinationFilter = data
    ?.map((item) => item.destination)
    .filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });

  useEffect(() => {
    const originParams = searchParams.get("origin") || "";
    const destinationParams = searchParams.get("destination") || "";
    setOrigin(
      originsFilter?.filter((data) => data.id === originParams)[0] || "",
    );
    setDestination(
      destinationFilter?.filter((data) => data.id === destinationParams)[0] ||
        "",
    );
    const convertToDateObject = (dateString) => {
      if (!dateString) return;
      return new DateObject({
        date: dateString,
        format: "YYYY-MM-DD",
        calendar: persian,
        locale: persian_fa,
      });
    };
    const startDateParams = shmasToMilad(searchParams.get("startDate") || "");
    setStartDate(convertToDateObject(startDateParams));
  }, []);

  const FilterHandler = () => {
    const params = new URLSearchParams();
    if (origin !== "مبدا" && origin) {
      params.set("origin", origin.id);
    }
    if (destination !== "مقصد" && destination) {
      params.set("destination", destination.id);
    }
    if (startDate) params.set("startDate", miladToShamas(startDate));
    router.push(`?${params.toString()}`);
  };
  const resetHandler = () => {
    setOrigin("");
    setDestination("");
    setStartDate("");
  };

  return (
    <section className="mt-6 mb-20 flex flex-col items-center justify-center gap-y-6 max-lg:px-7.5 md:container md:mt-4.5">
      <h3 className="md:text-error-buttom text-gray-59 font-semibold md:text-2xl">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h3>

      <div className="rounded-2xl-5 max:md:gap-x-2 flex w-full max-w-4xl items-center justify-between gap-x-1 gap-y-3 border-black/15 px-2.5 py-2 max-md:flex-col md:border">
        <div className="flex w-full max-md:gap-x-2 md:w-2/4">
          {/* Origin */}
          <div className="relative w-full rounded-xl border-black/15 max-md:border">
            <Listbox value={origin} onChange={setOrigin}>
              <ListboxButton className="text-gray-2C flex h-full w-full cursor-pointer items-center gap-x-2 rounded-3xl py-3 pr-2 text-xl focus:outline-none max-md:justify-center max-md:text-black/50 md:hover:bg-gray-100">
                <Icons
                  name="location"
                  className="size-5 max-md:stroke-black/50"
                />
                {!origin ? "مبدا" : origin?.name}
              </ListboxButton>
              <ListboxOptions
                as="div"
                anchor="bottom"
                className="z-10 mt-4 h-50 max-h-50 divide-y divide-black/15 overflow-y-auto rounded-xl border border-black/30 bg-white focus:outline-none max-md:w-2/5 md:min-w-50"
              >
                <p className="font-vazir-light text-text/70 w-full rounded-t-xl bg-[#F8F8F8] p-2">
                  پرتردد
                </p>
                {originsFilter?.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="text-text width-full flex cursor-pointer gap-x-2 px-2 py-4 text-sm hover:bg-gray-50 max-md:w-2/5"
                  >
                    <Icons name="location" className="size-5" />
                    {person.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
          {/* Destination */}
          <div className="border-back relative w-full rounded-xl border-black/15 max-md:border">
            <Listbox value={destination} onChange={setDestination}>
              <ListboxButton className="text-gray-2C flex h-full w-full cursor-pointer items-center gap-x-2 rounded-3xl py-3 pr-2 text-xl focus:outline-none max-md:justify-center max-md:text-black/50 md:hover:bg-gray-100">
                <Icons
                  name="global-search"
                  className="size-5 max-md:stroke-black/50"
                />
                {!destination ? "مقصد" : destination?.name}
              </ListboxButton>
              <ListboxOptions
                anchor="bottom"
                className="divide z-10 mt-4 h-50 max-h-50 divide-y divide-black/15 overflow-y-auto rounded-xl border border-black/30 bg-white focus:outline-none max-md:w-2/5 md:min-w-50"
              >
                <p className="font-vazir-light text-text/70 rounded-t-xl bg-[#F8F8F8] p-2">
                  پرتردد
                </p>
                {destinationFilter?.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="text-text flex cursor-pointer gap-x-2 px-2 py-4 text-sm hover:bg-gray-50"
                  >
                    <Icons name="location" className="size-5" />
                    {person.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>
        </div>
        {/* Calendar */}

        <div className="border-back relative flex w-full items-center justify-center rounded-3xl md:w-1/4 md:px-8 md:py-3">
          <DatePicker
            value={startDate}
            onChange={setStartDate}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom"
            placeholder="تاریخ"
            className="mr-2"
            portal
            inputClass="max-md:p-2 max-md:text-center cursor-pointer  max-md:placeholder:text-black/50 max-md:py-3 border-black/15 max-md:text-black/50 max-md:border max-md:rounded-xl max-md:border-[#00000026]  w-full  placeholder:text-text placeholder:text-xl focus:outline-none"
            containerClassName="border-none w-full "
          />
          <Icons
            name="calendar"
            className="absolute top-1/2 right-1 size-5 -translate-y-1/2 max-md:right-[39%] max-sm:right-1/4"
          />
        </div>
        <div className="flex w-full items-center justify-center gap-x-1 md:w-1/5 md:justify-end">
          <button
            onClick={resetHandler}
            className="cursor-pointer rounded-3xl bg-red-500 px-3 py-3 whitespace-nowrap text-white transition-colors duration-200 hover:bg-red-700 max-md:w-full"
          >
            پاک کردن
          </button>
          <button
            onClick={FilterHandler}
            className="bg-primary cursor-pointer rounded-3xl px-4 py-3 text-xl text-white transition-colors duration-200 hover:bg-green-500 max-md:w-full"
          >
            جستجو
          </button>
        </div>
      </div>
    </section>
  );
}
