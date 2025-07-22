"use client";

import { useTours } from "@/services/queries";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import TourNotFound from "@/components/TourNotFound";
import TourCard from "@/components/TourCard";
import useIsMobile from "@/hook/useIsMobile";
import Icons from "@/components/icons/Icons";
import { queryFilterHandler } from "@/util/helper";

function ToursSection() {
  const [showAll, setShowAll] = useState(false);
  const { data, isPending } = useTours();
  const searchParams = useSearchParams();

  const isMobile = useIsMobile();

  const mobileData = isMobile && !showAll ? data?.slice(0, 4) : data;

  const filteredTours = queryFilterHandler(mobileData, searchParams);
  if (isPending) return <TourNotFound />;
  return (
    <section className="mt-21 flex flex-col gap-3 xl:px-0 px-7.5 xl:container">
      <h4 className="text-right text-3xl text-black">همه تورها</h4>
      <div className="grid grid-cols-1 gap-x-6 gap-y-7.5 max-lg:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTours?.map((tour) => (
          <TourCard tour={tour} key={tour.id} />
        ))}
      </div>
      {isMobile && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mx-auto flex w-fit items-center gap-x-2 p-2 text-xs text-black/50"
        >
          {showAll ? "مشاهده کم‌تر" : "مشاهده بیشتر"}
          <Icons
            name="arrow-down"
            className={`size-3 ${showAll && "rotate-180"} `}
          />
        </button>
      )}
    </section>
  );
}

export default ToursSection;
