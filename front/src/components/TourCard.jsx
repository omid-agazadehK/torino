import { faDate, numberFormat, tourDays } from "@/util/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function TourCard({ tour }) {
  const { id, title, image, startDate, endDate, fleetVehicle, options, price } =
    tour;
  return (
    <div className="w-full rounded-lg border border-black/12">
      <Image
        src={image}
        width={600}
        height={600}
        alt="moz"
        className="w-full"
      />
      <div className="flex flex-col space-y-2 px-2 py-2">
        <span className="md:text-xl">{title}</span>
        <span className="text-text/70 w-full truncate lg:w-55">
          {faDate(startDate).split(" ")[1]} ماه - {tourDays(startDate, endDate)}{" "}
          روزه - {fleetVehicle}-{options[0]}-{options[1]}
        </span>
      </div>
      <div className="font-number-medium flex items-center justify-between border-t border-t-black/12 p-2">
        <Link
          href={`tours/${id}`}
          className="bg-primary rounded-sm px-5 py-0.5 text-white hover:bg-green-500"
        >
          رزرو
        </Link>

        <p className="text-xs">
          <span className="text-complementry text-base">
            {numberFormat(price)}{" "}
          </span>
          تومان
        </p>
      </div>
    </div>
  );
}

export default TourCard;
