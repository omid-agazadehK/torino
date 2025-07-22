"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function NextFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col-reverse items-center justify-around max-lg:pb-20 lg:flex-row">
      <div className="font-vazir-semibold flex flex-col gap-x-20 gap-y-5 lg:gap-y-20">
        <span className="text-text text-2xl lg:text-4xl">
          صفحه مورد نظر یافت نشد!
        </span>
        <button
          onClick={() => router.push("/")}
          className="text-primary bg-error-bg lg:text-error-buttom rounded-2xl px-11 py-4 text-xl"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
      <Image
        src="/images/ErrorTV.png"
        alt="خطای 404"
        width={500}
        height={500}
        className="h-80 w-80 lg:h-125 lg:w-125"
      />
    </div>
  );
}

export default NextFound;
