import { useGoogleLogin } from "@react-oauth/google";
import useGoogleAuth from "../hooks/useGoogleAuth";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import ButtonWithLogo from "./auth/ButtonWithLogo";

import { useLocation } from "react-router-dom";

const GoogleAuth = () => {
  const location = useLocation();
  const { mutate, data } = useGoogleAuth(
    location?.state ? location?.state.from.pathname : "/"
  );

  // const handleSuccess = (credentialResponse: any) => {
  // mutate({
  //   credential: credentialResponse.credential,
  //   client_id: credentialResponse.clientId,
  // });
  // };

  // const handleError = () => {
  //   console.log("Login Failed");
  // };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => mutate({ code: codeResponse }),
    flow: "auth-code",
  });

  return (
    <ButtonWithLogo onClick={() => login()}>
      <HStack gap="20px">
        <Icon as={FaGoogle} />
        <Text>Google</Text>
      </HStack>
    </ButtonWithLogo>
  );
};

export default GoogleAuth;
