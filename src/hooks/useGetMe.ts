import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
interface AuthSource {
  authSource: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_no: string | null;
  picture: string;
}

type FetchProductResponse = {
  data: AuthSource;
  success: boolean;
  message: string;
};
export default function useGetMe() {
  const apiClient = new APIClient<FetchProductResponse>(`/user/me`);
  // Use the useQuery hook from react-query to fetch data
  return useQuery<FetchProductResponse, Error>({
    queryKey: ["me"],
    queryFn: apiClient.get,
  });
}
