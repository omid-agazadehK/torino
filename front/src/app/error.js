"use client";

import Header from "@/layout/Header";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

export default function GlobalError() {
  return (
    <html>
      <body>
        <Header />
        <div className="flex flex-col-reverse items-center justify-around max-lg:pb-20 lg:flex-row">
          <div className="font-vazir-semibold flex flex-col gap-x-20 gap-y-5 lg:gap-y-20">
            <span className="text-text text-2xl lg:text-4xl">
              اتصال با سرور برقرار نیست!
            </span>
            <span>لطفا بعدا دوباره تلاش کنید</span>
          </div>
          <Image
            src="/images/Error.png"
            alt="خطای 404"
            width={500}
            height={500}
            className="h-80 w-80 lg:h-125 lg:w-125"
          />
        </div>
        <Footer />
      </body>
    </html>
  );
}
