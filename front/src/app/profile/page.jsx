import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchUserProfile } from "@/services/services";
import ProfilePage from "@/template/ProfilePage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function page() {
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    return redirect("/");
  }
  const queryClient = new QueryClient();
  
  try {
    await queryClient.prefetchQuery({
      queryKey: ["user"],
      queryFn: () => fetchUserProfile(accessToken)
    });
  } catch (error) {
    throw new Error(error.message);
    
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfilePage />
    </HydrationBoundary>
  );
}
