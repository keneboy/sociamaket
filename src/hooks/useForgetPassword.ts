import { APIClient } from "../services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";

interface registerProps {
  success: boolean;
  message: string;
}
type formProps = {
  email: string;
};

class RequestError extends Error {
  response: any; // Adjust the type based on the response structure you expect

  constructor(message: string, response: any) {
    super(message);
    this.response = response;
  }
}

const useForgetPassword = (config?: any) => {
  const apiClient = new APIClient<registerProps, formProps>(
    "/user/forgetPassword"
  );
  return useMutation<registerProps, RequestError, formProps>(
    (newData: formProps) => apiClient.post(newData, config),
    {
      onSuccess: (data, variable) => {
        console.log(data);
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
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
export default useForgetPassword;
