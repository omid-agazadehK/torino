import ProtectRoute from "@/components/portectRoute/ProtectRoute";
import CheckOutPage from "@/template/CheckOutPage";
import React from "react";

function checkOut() {
  return (
    <ProtectRoute>
      <CheckOutPage />
    </ProtectRoute>
  );
}

export default checkOut;
