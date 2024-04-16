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
import { useState } from "react";
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
import useForgetPassword from "../hooks/useForgetPassword";

export default function ForgetPassword() {
  const [result, setResult] = useState();
  const { mutate, isLoading, data } = useForgetPassword();
  const schema = z.object({
    email: z.string().min(3, "it should be either an email or a phone number"),
  });
  type MyFormValues = z.infer<typeof schema>;
  const methods = useForm<MyFormValues>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<MyFormValues> = (data) => {
    mutate(data);
  };
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
              {result ? "Check Mail" : "Forgot Password"}
            </Text>
          </HStack>
        </Box>
        <CardBody>
          <Flex direction={"column"} w="60%" m="0 auto">
            {data && data?.success ? (
              <Text>
                If the email address you entered is registered, you’ll receive
                an email with instructions on how to reset your password
              </Text>
            ) : (
              <>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Text
                      align={"center"}
                      color={colors["chakraColorsGray500"]}
                      mb="30px"
                    >
                      Enter your email or phone number
                    </Text>
                    <InputLabel
                      label="Email or Phone"
                      rest={{ w: "full" }}
                      isPassword={false}
                      form_label="email"
                    />
                    <LoginButton type="submit" isLoading={isLoading}>
                      SEARCH
                    </LoginButton>
                    <HStack justifyContent={"center"}>
                      <Button variant={"link"} mt="20px">
                        Cancel
                      </Button>
                    </HStack>
                  </form>
                </FormProvider>
              </>
            )}
          </Flex>
        </CardBody>
      </Card>
    </Layouts>
  );
}
