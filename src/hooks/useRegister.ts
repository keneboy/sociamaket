import { APIClient } from "../services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";

interface registerProps {
  success: boolean;
  message: string;
  token: string;
}
type formProps = {
  first_name: string;
  last_name: string;
  phone_no: string;
  email: string;
  password: string;
};

class RequestError extends Error {
  response: any; // Adjust the type based on the response structure you expect

  constructor(message: string, response: any) {
    super(message);
    this.response = response;
  }
}

const useRegister = (config?: any) => {
  const { setAuth } = useAuth();
  const apiClient = new APIClient<registerProps, formProps>("/user/register");
  return useMutation<registerProps, RequestError, formProps>(
    (newData: formProps) => apiClient.post(newData, config),
    {
      onSuccess: (data, variable) => {
        setTimeout(() => {
          setAuth(data);
        }, 3000);

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
export default useRegister;
