"use client";
import defaultOptions from "@/config/reactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function ReactQueryProvider({ children }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions,
      }),
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
