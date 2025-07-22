import React from "react";
import { useUserTour } from "@/services/queries";
import UserTours from "./UserTours";
function UserToursSection() {
  const { data } = useUserTour();

  return (
    <div className="w-full space-y-4 rounded-xl border border-black/20 px-5 py-3">
      {data?.map((tour) => (
        <UserTours
          tour={tour}
          key={tour.id + Math.floor(Math.random() * 323123)}
        />
      ))}
    </div>
  );
}

export default UserToursSection;
