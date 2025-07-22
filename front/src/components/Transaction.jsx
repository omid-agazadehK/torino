import { formatFullJalali, numberFormat } from "@/util/helper";
import React from "react";

function Transaction({ transaction }) {
  const { amount, createdAt, id, type, userId } = transaction;
  const result = formatFullJalali(createdAt);
  const idgen = () => {
    const min = Math.pow(10, 6 - 1);
    const max = Math.pow(10, 6) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div className="text-text flex items-center justify-around py-4 text-start text-sm">
      <span className="font-number-light">{result}</span>
      <span>{numberFormat(amount)}</span>
      <span className="hidden md:block">ثبت نام در تور گردشگری</span>
      <span className="font-number-light"> سفارش {idgen()}</span>
    </div>
  );
}

export default Transaction;
