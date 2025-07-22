"use client";

import { useUserAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ProtectRoute({ children }) {
  const { isLoggedIn } = useUserAuth();
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn === null) {
    return <div>در حال بررسی وضعیت ورود...</div>;
  }

  if (isLoggedIn === true) {
    return children;
  }

  return null;
}

export default ProtectRoute;
