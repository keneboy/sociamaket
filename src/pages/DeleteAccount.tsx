import {
  Box,
  Card,
  Container,
  HStack,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import FloatLabel from "../components/auth/FloatLabel";
import { LoginButton } from "../components/auth/LoginButton";
import colors from "../components/colors";
import DeleteInputLabel from "../components/Setting/DeleteInputLabel";
import InputLabel from "../components/Setting/InputLabel";
import TextareaLabel from "../components/Setting/TextareaLabel";
import TextComponent from "../components/TextComponent";
import SettingLayout from "../layouts/SettingLayout";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import colorModeFunc from "../Utils/colorModeFunc";
export default function DeleteAccount() {
  const [reason, setReason] = useState("");

  const schema = z.object({
    password: z
      .string()
      .min(6, { message: "name should be atleast 6 characters" }),
  });
  //   we extract the type from from the schema with the help of zod
  type MyFormValues = z.infer<typeof schema>;

  const methods = useForm<MyFormValues>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<MyFormValues> = (data) => {
    console.log(data);
  };
  return (
    <SettingLayout title="Disabled chat">
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
          <TextComponent>Delete my account forever</TextComponent>
        </HStack>

        <Container maxWidth={"384px"} pb="40px" pt="30px">
          {false ? (
            <>
              <TextComponent
                rest={{
                  fontSize: "14px",
                  mb: "10px",
                  color: `${colorModeFunc("#000", "#fff")}`,
                }}
              >
                Account deactivation means to delete your account:
              </TextComponent>
              <TextComponent
                rest={{
                  fontSize: "14px",
                  color: `${colorModeFunc("#000", "#fff")}`,
                }}
              >
                You will not be able to log in to your profile anymore and all
                your account history will be deleted without the possibility to
                restore
              </TextComponent>
              <Box mt="20px">
                <DeleteInputLabel
                  label="Why do you want to leave?"
                  onSelectReason={(val) => setReason(val)}
                />
              </Box>
              {reason === "Other reason" && (
                <Box mt="20px">
                  {" "}
                  <TextareaLabel label="your reason" />
                </Box>
              )}

              <LoginButton rest={{ bg: "red", mt: "20px" }}>
                Delete my account forever
              </LoginButton>
            </>
          ) : (
            <>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextComponent
                    rest={{
                      fontSize: "14px",
                      mb: "10px",
                      color: `${colorModeFunc("#000", "#fff")}`,
                    }}
                  >
                    Please, type your current password to Delete the account:
                  </TextComponent>
                  <InputLabel label="Your password" form_label="password" />
                  <LoginButton rest={{ bg: "red" }}>
                    Delete my account forever
                  </LoginButton>
                </form>
              </FormProvider>
            </>
          )}
        </Container>
      </Card>
    </SettingLayout>
  );
}
