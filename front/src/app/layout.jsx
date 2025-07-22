import React from "react";
import { Toaster } from "react-hot-toast";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import ReactQueryProvider from "@/components/provider/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "@/contexts/AuthContext";

import "../styles/globals.css";
import DropdownProvider from "@/contexts/DropdownContext";
import SectionProvider from "@/contexts/SectionContext";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir-regular flex min-h-dvh flex-col">
        <ReactQueryProvider>
          <AuthProvider>
            <DropdownProvider>
              <SectionProvider>
                <Header />
                <div className="flex flex-1 flex-col">
                  {children}
                  <Footer />
                  <span className="mx-auto mt-3 mb-2">
                    کلیه حقوق این وب سایت متعلق به تورینو میباشد.
                  </span>
                </div>
                <Toaster />
              </SectionProvider>
            </DropdownProvider>
          </AuthProvider>
          <ReactQueryDevtools />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
