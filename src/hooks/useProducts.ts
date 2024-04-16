import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";

type imageProps = {
  image: string;
  id: number;
};
export type product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: imageProps[];
};

type FetchProductResponse = {
  data: product[];
  success: boolean;
  message: string;
};
export default function useProducts() {
  const apiClient = new APIClient<FetchProductResponse>(`/products`);
  // Use the useQuery hook from react-query to fetch data
  return useQuery<FetchProductResponse, Error>({
    queryKey: ["products"],
    queryFn: apiClient.get,
  });
}
