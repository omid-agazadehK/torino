import Image from "next/image";
import React from "react";
function AdvantagesSection() {
  return (
    <div className="mx-x-7.5 mx-10 flex flex-col items-center justify-evenly gap-y-10 border-t border-black/20 pt-11 pb-8 lg:container lg:flex-row lg:pt-8">
      <div className="flex items-center justify-center gap-x-4 lg:w-auto lg:gap-x-2">
        <Image
          src="/images/Advantages/discount.png"
          alt="discount"
          width={500}
          height={500}
          className="cov h-26 w-30"
        />
        <div className="text-text">
          <span className="font-number-medium text-sm sm:text-xl md:text-2xl lg:text-3xl">
            بصرفه ترین قیمت
          </span>
          <p className="font-number-light mt-1 w-52 text-xs sm:text-base">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4 lg:w-auto lg:gap-x-2">
        <Image
          src="/images/Advantages/message.png"
          alt="discount"
          width={500}
          height={500}
          className="h-26 w-30"
        />
        <div className="text-text">
          <span className="font-number-medium text-sm sm:text-xl md:text-2xl lg:text-3xl">
            پشتیبانی
          </span>
          <p className="font-number-light mt-1 w-52 text-xs sm:text-base">
            پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4 lg:w-auto lg:gap-x-2">
        <Image
          src="/images/Advantages/heart.png"
          alt="discount"
          width={500}
          height={500}
          className="h-26 w-30"
        />
        <div className="text-text">
          <span className="font-number-medium text-sm sm:text-2xl lg:text-3xl">
            رضایت کاربران
          </span>
          <p className="font-number-light mt-1 w-52 text-xs sm:text-base">
            رضایت بیش از 10هزار کاربر از تور های ما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesSection;
