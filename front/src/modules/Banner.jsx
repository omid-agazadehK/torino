import Icons from "@/components/icons/Icons";
import Image from "next/image";
import React from "react";
function Banner() {
  return (
    <section className="container mt-27 max-lg:px-7.5">
      <div className="flex w-full flex-col rounded-xl border border-black/25 md:flex-row">
        <div className="bg-primary h- relative flex h-30 scale-101 flex-col items-start justify-start gap-y-3 rounded-xl pt-4 sm:h-45 pr-5 text-white md:h-auto md:w-3/4 lg:justify-center lg:pr-15">
          <p className="font-vazir-bold text-xl sm:text-4xl md:text-4xl lg:text-5xl">
            خرید تلفی از <span className="text-secondary">تورینو</span>
          </p>
          <span className="text-xs sm:text-xl md:text-2xl lg:text-3xl">
            به هرکجا که میخواهید!
          </span>
          <Image
            src="/images/banner.png"
            alt="banner"
            width={500}
            height={500}
            className="absolute bottom-0 left-0 max-w-50  sm:max-w-75 lg:left-11 lg:max-w-75"
          />
        </div>
        <div className="font-number-medium flex flex-row items-center justify-center gap-x-3 gap-y-3 py-3 md:w-1/4 md:flex-col md:py-17.5">
          <span className="flex-center text-2xl">
            021-1840
            <Icons name="call" className="fill-black" />
          </span>
          <button className="bg-secondary rounded-lg px-10 py-2 text-white">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
