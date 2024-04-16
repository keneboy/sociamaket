import {
  Button,
  Flex,
  HStack,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Icon,
  Link,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import colors from "../colors";
import { LoginButton } from "./LoginButton";
import ButtonWithLogo from "./ButtonWithLogo";
import { Link as ReachLink } from "react-router-dom";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputLabel from "../Setting/InputLabel";
import useLogin from "../../hooks/useLogin";
import { useEffect } from "react";
import GoogleAuth from "../GoogleAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  onSelectedAuth: (val: string) => void;
  label: string;
};
export const LoginForm = ({ label, onSelectedAuth }: Props) => {
  const navigate = useNavigate();
  const newLogin = useLogin();
  const location = useLocation();
  //   define the shape of the form using zod schema
  // const schema = z.object({
  //   email_or_phone: z.string().min(3, { message: "email is required" }).email(),
  //   password: z
  //     .string()
  //     .min(6, { message: "password should be atleast 6 characters" }),
  // });
  // //   we extract the type from from the schema with the help of zod
  // type MyFormValues = z.infer<typeof schema>;

  // const methods = useForm<MyFormValues>({
  //   resolver: zodResolver(schema),
  // });
  // const { handleSubmit } = methods;
  // const onSubmit: SubmitHandler<MyFormValues> = (data) => {
  //   newLogin.mutate(data);
  // };

  // check if the user has location property
  const validationSchema = Yup.object().shape({
    email_or_phone: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[!@#$%^&*()_+}{:;'?/.,\[\]\-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
        "Password must contain at least one special character, one number, one uppercase letter, and one lowercase letter"
      )
      .label("Password"),
  });

  const formik = useFormik({
    initialValues: {
      email_or_phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (val) => {
      console.log(val, "reaching here...");
      newLogin.mutate(val);
    },
  });

  useEffect(() => {
    if (newLogin?.data && newLogin?.data?.token) {
      const redirect = location?.state ? location?.state.from.pathname : "/";
      navigate(redirect);
    }
  }, [newLogin]);
  return (
    <>
      {" "}
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <ModalOverlay />
          <ModalContent p="20px">
            <ModalHeader fontSize={"16px"}>
              {newLogin?.error && (
                <Alert
                  status="error"
                  variant={"left-accent"}
                  fontSize="12px"
                  my="20px"
                >
                  <AlertIcon />
                  {newLogin?.error?.response?.data.message}
                </Alert>
              )}
              {label}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputLabel
                label="Email or Phone"
                form_label="email_or_phone"
                isPassword={false}
              />
              <InputLabel label="Password" form_label="password" />

              <Flex justify={"flex-end"}>
                <Link
                  variant={"link"}
                  color={colors["primary"]}
                  fontSize="12px"
                  fontWeight={"bold"}
                  mb="10px"
                  as={ReachLink}
                  to="/forget-password"
                >
                  Forgot your password?
                </Link>
              </Flex>

              <LoginButton type="submit" isLoading={newLogin.isLoading}>
                SIGN IN{" "}
              </LoginButton>
              <Flex direction={"column"} align="center" mt="14px">
                <Text p="0" m="0">
                  Or
                </Text>
                <Text p="0" m="0" fontSize={"14px"}>
                  {" "}
                  Don't have an account?{" "}
                  <Button
                    variant="link"
                    color={colors["primary"]}
                    fontSize={"14px"}
                    onClick={() => onSelectedAuth("Registration")}
                  >
                    Registration
                  </Button>
                </Text>
              </Flex>

              <Flex gap="10px" mt="10px">
                <GoogleAuth />
                <ButtonWithLogo rest={{ bg: "#3b5998", color: "#fff" }}>
                  <HStack gap="20px">
                    <Icon as={FaFacebook} />
                    <Text>Facebook</Text>
                  </HStack>
                </ButtonWithLogo>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Form>
      </FormikProvider>
    </>
  );
};
