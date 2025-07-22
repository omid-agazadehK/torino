"use Client";
import { useUserAuth } from "@/contexts/AuthContext";
import { useAddBasket } from "@/services/mutations";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function AddBasketButton({ id }) {
  const { isPending, mutate } = useAddBasket();
  const { isLoggedIn } = useUserAuth();
  const router = useRouter();
  const addBasketHandler = () => {
    if (!isLoggedIn) {
      toast.error("لطفا اول وارد سایت شوید");
      return;
    }
    mutate(id, {
      onSuccess: () => router.push(`/checkOut`),
      onError: (err) => {
        throw new Error(err);
      },
    });
  };
  return (
    <button
      disabled={isPending}
      onClick={addBasketHandler}
      className={` ${isPending && "cursor-not-allowed grayscale"} bg-primary rounded-xl px-5 py-3 text-2xl text-white transition-colors duration-200 hover:bg-green-500 max-md:px-7.5 max-md:text-xl lg:px-11.5`}
    >
      رزرو و خرید
    </button>
  );
}

export default AddBasketButton;
