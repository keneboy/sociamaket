import { APIClient } from "../services/api-client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";

interface loginProps {
  success: boolean;
  message: string;
  token: string;
}
type formProps = {
  email_or_phone: string;
  password: string;
};

class RequestError extends Error {
  response: any; // Adjust the type based on the response structure you expect

  constructor(message: string, response: any) {
    super(message);
    this.response = response;
  }
}

const useCreateStore = (config?: any) => {
  // consume the useAuth hook to get the token
  const { setAuth } = useAuth();

  const apiClient = new APIClient<loginProps, formProps>("/user/login");
  return useMutation<loginProps, RequestError, formProps>(
    (newData: formProps) => apiClient.post(newData, config),
    {
      onSuccess: (data, variable) => {
        console.log(data, "logging in");
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        setAuth(data);
      },
      onError: (error) => {
        if (error.response) {
          console.log("An error occurred:", error.response.data.message);
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
export default useCreateStore;
