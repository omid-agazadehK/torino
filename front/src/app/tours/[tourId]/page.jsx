import { getTours } from "@/services/services";
import TourDetailsPage from "@/template/TourDetailsPage";
import React from "react";

export async function generateStaticParams() {
  const tours = await getTours();

  return tours.map((tour) => ({
    tourId: tour.id.toString(),
  }));
}

async function getTour(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch tours");
  }
  return res.json();
}

async function Page({ params }) {
  const tour = await getTour(params.tourId);
  return <TourDetailsPage tour={tour} />;
}

export default Page;
