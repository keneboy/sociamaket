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
  Checkbox,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import colors from "../colors";
import FloatingLabel from "./FloatingLabel";
import { LoginButton } from "./LoginButton";
import ButtonWithLogo from "./ButtonWithLogo";
import useRegister from "../../hooks/useRegister";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputLabel from "../Setting/InputLabel";
import GoogleAuth from "../GoogleAuth";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

export const RegistrationForm = ({
  onSelectedAuth,
}: {
  onSelectedAuth: (val: string) => void;
}) => {
  // consume the useRegister hook
  let addNewUser = useRegister();
  // const schema = z.object({
  //   first_name: z
  //     .string()
  //     .min(3, { message: "first_name should be atleast 3 characters" }),
  //   last_name: z
  //     .string()
  //     .min(3, { message: "name should be atleast 3 characters" }),
  //   phone_no: z
  //     .string()
  //     .min(3, { message: "name should be atleast 3 characters" }),
  //   email: z.string().min(3, { message: "This field is required" }).email(),
  //   password: z
  //     .string()
  //     .min(6, { message: "name should be atleast 6 characters" }),
  // });
  // type MyFormValues = z.infer<typeof schema>;

  // const methods = useForm<MyFormValues>({
  //   resolver: zodResolver(schema),
  // });
  // const { handleSubmit } = methods;
  // const onSubmit: SubmitHandler<MyFormValues> = (data) => {
  //   addNewUser.mutate(data);
  // };

  // formik
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[!@#$%^&*()_+}{:;'?/.,\[\]\-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$/,
        "Password must contain at least one special character, one number, one uppercase letter, and one lowercase letter"
      )
      .label("Password"),
    phone_no: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number is invalid")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone_no: "",
    },
    validationSchema,
    onSubmit: async (val) => {
      addNewUser.mutate(val);
    },
  });

  return (
    <>
      {" "}
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <ModalOverlay />
          <ModalContent p="20px">
            <ModalHeader fontSize={"16px"}>
              {addNewUser?.error && (
                <Alert
                  status="error"
                  variant={"left-accent"}
                  fontSize="12px"
                  my="20px"
                >
                  <AlertIcon />
                  {addNewUser?.error?.response?.data.message ||
                    addNewUser?.error.message}
                </Alert>
              )}
              {addNewUser?.data?.success && (
                <Alert
                  status="success"
                  variant={"left-accent"}
                  fontSize="12px"
                  my="20px"
                >
                  <AlertIcon />
                  {`${addNewUser?.data.message} and will be redirected to the login page shortly`}
                </Alert>
              )}
              Register via email and phone
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputLabel label="Email" isPassword={false} form_label="email" />
              <InputLabel label="Password" form_label="password" />
              <InputLabel
                label="first_name"
                isPassword={false}
                form_label="first_name"
              />
              <InputLabel
                label="last_name"
                isPassword={false}
                form_label="last_name"
              />
              <InputLabel
                label="phone_no"
                isPassword={false}
                form_label="phone_no"
              />

              <Checkbox
                defaultChecked
                color={"#00b53f"}
                colorScheme="green"
                mb="5px"
              >
                I agree with rules
              </Checkbox>
              <LoginButton type="submit" isLoading={addNewUser.isLoading}>
                Register{" "}
              </LoginButton>
              <Flex direction={"column"} align="center" mt="14px">
                <Text p="0" m="0">
                  Or
                </Text>
                <Text p="0" m="0" fontSize={"14px"}>
                  {" "}
                  already have an account?{" "}
                  <Button
                    variant="link"
                    color={colors["primary"]}
                    fontSize={"14px"}
                    onClick={() => onSelectedAuth("Sign in")}
                  >
                    Sign in
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
