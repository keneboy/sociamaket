import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export default function useProductContext() {
  const { state, dispatch } = useContext(ProductContext);
  return {
    state,
    dispatch,
  };
}
