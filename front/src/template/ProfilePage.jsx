"use client";
import AccountDataForm from "@/components/AccountDataForm";
import BankDataForm from "@/components/BankDataForm";
import PersonalDataForm from "@/components/PersonalDataForm";
import ProfileSection from "@/components/ProfileSection";
import UserToursSection from "@/components/UserToursSection";
import UserTransactionsForm from "@/components/UserTransactionsForm";
import { useSelectSection } from "@/contexts/SectionContext";
import React from "react";

function ProfilePage() {
  const { sectionId } = useSelectSection();
  return (
    <main className="flex-1 pb-3 lg:container">
      <section className="lf:gap-x-8 mt-4 flex flex-col gap-x-2 px-6 md:flex-row lg:mx-15">
        <ProfileSection />
        {sectionId === "profile" && (
          <div className="flex w-full flex-col gap-y-4 pb-4">
            <AccountDataForm />
            <PersonalDataForm />
            <BankDataForm />
          </div>
        )}
        {sectionId === "tours" && <UserToursSection />}
        {sectionId === "transactions" && <UserTransactionsForm />}
      </section>
    </main>
  );
}

export default ProfilePage;
