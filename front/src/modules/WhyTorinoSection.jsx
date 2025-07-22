"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Icons from "@/components/icons/Icons";

function WhyTorinoSection() {
  return (
    <section className="mt-48 mb-20 flex h-110 flex-col justify-between px-7.5 sm:h-140 lg:flex-row xl:container xl:px-0">
      <div className="flex flex-col gap-7">
        <div className="font-vazir-bold gapy flex items-center gap-x-4 text-4xl">
          <div className="circle relative size-15 rounded-full">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -scale-x-100 text-4xl font-extrabold text-white">
              ?
            </span>
          </div>
          <p>
            چرا <span className="text-primary">تورینو</span> ؟
          </p>
        </div>
        <span className="font-vazir-medium hidden text-2xl lg:block">
          تور طبیعت گردی و تاریخی
        </span>
        <p className="text-text font-morabba-medium hidden max-w-lg text-xl leading-10 lg:block">
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>

      <div className="relative mt-4 h-full lg:mt-0">
        <Swiper
          effect={"cards"}
          pagination={{ type: "fraction" }}
          grabCursor={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[EffectCards, Pagination, Navigation]}
          className="mySwiper"
        >
          <span className="custom-next text-secondary absolute -bottom-10 left-2/7 z-20 rotate-180">
            <Icons name="line-arrow" />
          </span>
          <span className="custom-prev text-secondary absolute right-2/7 -bottom-10 z-20">
            <Icons name="line-arrow" />
          </span>
          <SwiperSlide className="">
            <Image
              src="/images/swiper/1.png"
              width={600}
              height={600}
              className="h-80 w-75 rounded-4xl sm:h-100 sm:w-95 lg:h-120"
              alt="kavir"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/swiper/2.jpg"
              width={600}
              height={600}
              className="h-80 w-75 rounded-4xl sm:h-100 sm:w-95 lg:h-120"
              alt="kavir"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/swiper/3.jpg"
              width={600}
              height={600}
              className="h-80 w-75 rounded-4xl sm:h-100 sm:w-95 lg:h-120"
              alt="kavir"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/swiper/4.jpg"
              width={600}
              height={600}
              className="h-80 w-75 rounded-4xl sm:h-100 sm:w-95 lg:h-120"
              alt="kavir"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default WhyTorinoSection;
