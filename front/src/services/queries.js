import api from "@/config/api";
import { useUserAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { fetchUserProfile, getTours } from "./services";
import Cookies from "js-cookie";

const useTours = () => {
  return useQuery({
    queryKey: ["tours"],
    queryFn: getTours,
  });
};
const useAuth = () => {
  const { isLoggedIn } = useUserAuth();
  if (!isLoggedIn) return;
  function queryFn() {
    return api.get("/user/profile");
  }
  return useQuery({ queryKey: ["authUser"], queryFn });
};
const useBasket = () => {
  const queryFn = () => {
    return api.get("/basket");
  };
  return useQuery({ queryKey: ["basket"], queryFn });
};
const useUser = () => {
  const accessToken = Cookies.get("accessToken");

  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUserProfile(accessToken),
  });
};
const useUserTour = () => {
  const queryFn = () => {
    return api.get("/user/tours");
  };
  return useQuery({ queryKey: ["userTours"], queryFn });
};
const useTransactions = () => {
  const queryFn = () => {
    return api.get("/user/transactions");
  };
  return useQuery({ queryKey: ["transactions"], queryFn });
};
export { useTours, useAuth, useBasket, useUser, useUserTour, useTransactions };
