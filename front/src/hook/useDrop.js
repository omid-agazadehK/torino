import { DropdownContext } from "@/contexts/DropdownContext";
import { useContext } from "react";

const useDrop = () => {
  const data = useContext(DropdownContext);
  return data;
};
export default useDrop;
