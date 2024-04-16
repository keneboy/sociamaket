import { APIClient } from "../services/api-client";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

interface Product {
  id: number;
  title: string;
  description?: string | null;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  category?: string | null;
  thumbnail?: string | null;
  youtube_video?: string | null;
  brand?: string | null;
  type?: string | null;
  condition_state?: string | null;
  isNegotiable?: string | null;
  phone_number?: string | null;
  name?: string | null;
  price?: string | null;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: number;
  errors: null;
}
const apiClient = new APIClient<ApiResponse, Product>("/products");
export class RequestError extends Error {
  response: any; // Adjust the type based on the response structure you expect

  constructor(message: string, response: any) {
    super(message);
    this.response = response;
  }
}

const useCreateProduct = (config: any) => {
  const toast = useToast();
  return useMutation<ApiResponse, RequestError, Product>(
    (newData: Product) => apiClient.post(newData, config),
    {
      onSuccess: (data) => {
        toast({
          title: "Success!!",
          description:
            data?.message || "your product has successfully being listed",
          position: "top",
          status: "success",
        });
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      },
      onError: (error) => {
        toast({
          title: "Failed",
          description: error?.response?.data?.message || error?.message,
          position: "top",
          status: "error",
        });
        if (error.response) {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      },
    }
  );
};
export default useCreateProduct;
