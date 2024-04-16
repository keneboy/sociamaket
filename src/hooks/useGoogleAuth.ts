import { APIClient } from "../services/api-client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

interface registerProps {
  success: boolean;
  message: string;
  token: string;
}
type googleProps = {
  code: any;
  //   client_id: string;
};

class RequestError extends Error {
  response: any; // Adjust the type based on the response structure you expect

  constructor(message: string, response: any) {
    super(message);
    this.response = response;
  }
}

const useGoogleAuth = (location?: any) => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const apiClient = new APIClient<registerProps, googleProps>("/google-auth");
  return useMutation<registerProps, RequestError, googleProps>(
    (newData: googleProps) => apiClient.post(newData),
    {
      onSuccess: (data, variable) => {
        setAuth(data);
        navigate(location);
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
export default useGoogleAuth;
