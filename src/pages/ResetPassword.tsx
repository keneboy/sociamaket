import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { FaKey } from "react-icons/fa";
import FloatingLabel from "../components/auth/FloatingLabel";
import { LoginButton } from "../components/auth/LoginButton";
import colors from "../components/colors";
import InputLabel from "../components/Setting/InputLabel";
import Layouts from "../layouts/Layouts";
import colorModeFunc from "../Utils/colorModeFunc";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useResetPassword from "../hooks/useResetPassword";
import { useLocation, useNavigate } from "react-router-dom";
import { RedirectContext } from "../contextApi/RedirectContext";

interface activateProps {
  type: string;
  activate: boolean;
}
export default function ResetPassword() {
  const { setActivate } = useContext(RedirectContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const { mutate, data, isLoading } = useResetPassword(
    `Bearer ${code}` as string,
    {}
  );

  const schema = z
    .object({
      newPassword: z
        .string()
        .min(6, { message: "Password should be at least 6 characters" }),
      repeatPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.repeatPassword, {
      message: "Passwords don't match",
      path: ["repeatPassword"],
    });

  type MyFormValues = z.infer<typeof schema>;
  const methods = useForm<MyFormValues>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<MyFormValues> = (data) => {
    mutate(data);
  };

  //   redirect to homepage after successfully updating the password
  useEffect(() => {
    if (data && data.success) {
      setActivate({ type: "login", activate: true });
      navigate("/?notification=Password updated successfully");
    }
  }, [data]);

  return (
    <Layouts isFooter={false}>
      <Card maxW={"800px"} m="0 auto" mt="60px">
        <Box
          borderBottom={colorModeFunc(
            colors["borderBottom"],
            colors["borderBottomDark"]
          )}
        >
          <HStack p="20px" gap="10px">
            <Icon as={FaKey} color={colors["primary"]} />
            <Text as={"span"} fontWeight="bold">
              {" "}
              {"Reset Password"}
            </Text>
          </HStack>
        </Box>
        <CardBody>
          <Flex direction={"column"} w="60%" m="0 auto">
            <>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Text
                    align={"center"}
                    color={colors["chakraColorsGray500"]}
                    mb="30px"
                  >
                    Choose a new password
                  </Text>
                  <InputLabel
                    label="New Password"
                    rest={{ w: "full" }}
                    isPassword={true}
                    form_label="newPassword"
                  />
                  <InputLabel
                    label="Repeat New Password"
                    rest={{ w: "full" }}
                    isPassword={true}
                    form_label="repeatPassword"
                  />
                  <LoginButton type="submit" isLoading={isLoading}>
                    Change
                  </LoginButton>
                </form>
              </FormProvider>
            </>
          </Flex>
        </CardBody>
      </Card>
    </Layouts>
  );
}
