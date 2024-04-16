import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

type subprops = {
  avatar: string;
  id: number;
  name: string;
};
export type product = {
  avatar: string;
  id: number;
  name: string;
  subCategories: subprops[];
};

type FetchProductResponse = {
  data: product[];
  success: boolean;
  message: string;
};
export default function useCategories() {
  const apiClient = new APIClient<FetchProductResponse>(`/categories`);
  // Use the useQuery hook from react-query to fetch data
  return useQuery<FetchProductResponse, Error>({
    queryKey: ["categories"],
    queryFn: apiClient.get,
  });
}
