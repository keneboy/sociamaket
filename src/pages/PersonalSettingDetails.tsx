import {
  Badge,
  Box,
  Card,
  Container,
  HStack,
  IconButton,
  Icon,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { LoginButton } from "../components/auth/LoginButton";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import SettingLayout from "../layouts/SettingLayout";
import { RxPerson } from "react-icons/rx";
import InputLabel from "../components/Setting/InputLabel";
import { HiPencil } from "react-icons/hi";
import { FaFacebookF, FaRegHandshake } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import colorModeFunc from "../Utils/colorModeFunc";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PersonalSettingDetails() {
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
    console.log(data);
  };
  return (
    <SettingLayout title="Personal details">
      <Card flex="1" alignSelf={"flex-start"}>
        <HStack
          borderBottom={colorModeFunc(
            colors["borderBottom"],
            colors["borderBottomDark"]
          )}
          height="56px"
          px="20px"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <TextComponent>Personal details</TextComponent>
          <LoginButton
            rest={{
              w: "auto",
              borderRadius: "10px",
              py: "10px",
              height: "auto",
            }}
          >
            Saved
          </LoginButton>
        </HStack>

        <Container maxWidth={"400px"} mt="40px" pb="40px">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack justifyContent={"center"}>
                <Box
                  width={"100px"}
                  height="100px"
                  position={"relative"}
                  mb="40px"
                >
                  <IconButton
                    aria-label={"My profile"}
                    icon={<RxPerson />}
                    fontSize="6xl"
                    borderRadius="50%"
                    width={"100%"}
                    height="100%"
                    bg="green.100"
                    color="green.400"
                  ></IconButton>
                  <Badge
                    position={"absolute"}
                    bottom="5px"
                    right="-5px"
                    borderRadius={"50px"}
                    width="40px"
                    height={"40px"}
                    display="flex"
                    alignItems={"center"}
                    justifyContent="center"
                    cursor={"pointer"}
                  >
                    <Icon as={HiPencil} fontSize="25px" />
                  </Badge>
                </Box>
              </HStack>

              <InputLabel
                label="First Name"
                isPassword={false}
                form_label="first_name"
              />
              <InputLabel
                label="Last Name"
                isPassword={false}
                form_label="last_name"
              />
              <InputLabel
                label="Select Location"
                isPassword={false}
                form_label="select_location"
              />
              <InputLabel
                label="Birthday"
                isPassword={false}
                form_label="birthday"
              />
              <InputLabel label="Sex" isPassword={false} form_label="sex" />
              <HStack
                gap="10px"
                bg="#EBF2F7"
                px="20px"
                py="10px"
                borderRadius={"30px"}
                mb="20px"
                color="#000"
              >
                <Icon as={FaRegHandshake} fontSize="30px" />
                <TextComponent rest={{ fontSize: "14px" }}>
                  {" "}
                  Connect your social media accounts for smoother experience!
                </TextComponent>
              </HStack>
              <Box>
                <List p="0" mb="30px">
                  <ListItem
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                    p="20px"
                  >
                    <HStack>
                      <Icon as={FaFacebookF} />
                      <TextComponent>Facebook</TextComponent>
                      <Switch size="sm" ml="auto!important" />
                    </HStack>
                  </ListItem>
                  <ListItem
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                    p="20px"
                  >
                    <HStack>
                      <Icon as={FcGoogle} />
                      <TextComponent>Google</TextComponent>
                      <Switch size="sm" ml="auto!important" />
                    </HStack>
                  </ListItem>
                </List>
              </Box>
              <LoginButton>Save</LoginButton>
            </form>
          </FormProvider>
        </Container>
      </Card>
    </SettingLayout>
  );
}
