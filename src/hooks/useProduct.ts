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
  state: string;
  city: string;
  phone_number: string;
  name: string;
  subCategory: string;
};

type FetchProductResponse = {
  data: product;
  success: boolean;
  message: string;
};
export default function useProduct(id: any) {
  const apiClient = new APIClient<FetchProductResponse>(`/products/${id}`);
  // Use the useQuery hook from react-query to fetch data
  return useQuery<FetchProductResponse, Error>({
    queryKey: ["single_products", id],
    queryFn: apiClient.get,
  });
}
