import React from "react";
import Transaction from "./Transaction";
import { useTransactions } from "@/services/queries";

function UserTransactionsForm() {
  const { data } = useTransactions();
  return (
    <section className="w-full rounded-xl border border-black/20">
      <div className="bg-white-f3 flex items-center justify-around py-4">
        <span>تاریخ و ساعت</span>
        <span>مبلغ(تومان)</span>
        <span className="hidden md:block">نوع تراکنش</span>
        <span>شماره سفارش</span>
      </div>
      <div>
        {data?.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </section>
  );
}

export default UserTransactionsForm;
