import api from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const useRegister = () => {
  const mutationFn = (mobile) => {
    return api.post("/auth/send-otp", { mobile });
  };
  return useMutation({
    mutationKey: ["register"],
    mutationFn,
  });
};
const useLogin = () => {
  const mutationFn = (data) => {
    const { number, otp } = data;
    return api.post("/auth/check-otp", { mobile: number, code: otp });
  };
  return useMutation({
    mutationKey: ["login"],
    mutationFn,
  });
};
const useAddBasket = () => {
  const mutationFn = (id) => {
    return api.put(`/basket/${id}`);
  };
  return useMutation({ mutationKey: ["addBasket"], mutationFn });
};
const useOrderCheckout = () => {
  const mutationFn = (userDetails) => {
    console.log(userDetails);
    return api.post(`/order`, {
      fullName: "omid agazadeh",
      nationalCode: "1451617628",
      gender: "male",
      birthDate: "2022-07-05",
    });
  };
  return useMutation({ mutationKey: ["order"], mutationFn });
};
const useUpdateProfile = () => {
  const mutationFn = (userAccoutData) => {
    const { mobile, email } = userAccoutData;
    return api.put("/user/profile", { mobile, email });
  };
  return useMutation({ mutationKey: ["user", "email"], mutationFn });
};
const usePersonalData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (userAccoutData) => {
    return api.put("/user/profile", { ...userAccoutData });
  };
  return useMutation({
    mutationKey: ["user", "personal"],
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });
};

const useBankData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (userAccoutData) => {
    return api.put("/user/profile", { ...userAccoutData });
  };
  return useMutation({
    mutationKey: ["user", "bank"],
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });
};
export {
  useRegister,
  useLogin,
  useAddBasket,
  useOrderCheckout,
  useUpdateProfile,
  usePersonalData,
  useBankData,
};
