import Image from "next/image";
import React from "react";
function Footer() {
  return (
    <>
      <div className="border-top text-text container flex flex-col border-b border-black/20 px-8 pt-5 pb-7 sm:px-15 lg:flex-row lg:items-center lg:justify-between lg:px-31.5">
        <div className="flex justify-between gap-2 lg:min-w-2/7">
          <div>
            <span className="font-vazir-semibold text-right text-2xl">
              تورینو
            </span>
            <ul className="mt-6 flex flex-col space-y-2 text-lg">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div>
            <span className="font-vazir-semibold text-right text-xl lg:text-2xl">
              خدمات مشتریان
            </span>
            <ul className="mt-6 flex flex-col space-y-2 text-base lg:text-lg">
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex max-lg:flex-row-reverse max-lg:items-center max-lg:justify-between lg:flex-col">
          <div className="flex flex-col items-end gap-y-5">
            <Image
              src="/images/Torino.png"
              alt="لوگوی سایت"
              width={150}
              height={40}
              className="w-fit"
            />
            <div className="flex gap-1">
              <span className="whitespace-nowrap">تلفن پشتیبانی:</span>
              <span className="font-number-light whitespace-nowrap">
                021-8574
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Image
              src="/images/aira.png"
              alt="لوگوی سایت"
              width={70}
              height={72}
              className="w-17 max-md:w-9"
            />
            <Image
              src="/images/samandehi.png"
              alt="لوگوی سایت"
              width={70}
              height={72}
              className="w-17 max-md:w-9"
            />
            <Image
              src="/images/ecunion.png"
              alt="لوگوی سایت"
              width={70}
              height={72}
              className="w-17 max-md:w-9"
            />
            <Image
              src="/images/passenger-rights.png"
              alt="لوگوی سایت"
              width={70}
              height={72}
              className="w-17 max-md:w-9"
            />
            <Image
              src="/images/state-airline.png"
              alt="لوگوی سایت"
              width={72}
              height={72}
              className="w-17 max-md:w-9"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
