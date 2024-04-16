import {
  Badge,
  Box,
  Card,
  Container,
  HStack,
  Icon,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { LoginButton } from "../components/auth/LoginButton";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import SettingLayout from "../layouts/SettingLayout";
import InputLabel from "../components/Setting/InputLabel";
import colorModeFunc from "../Utils/colorModeFunc";
export default function EmailSetting() {
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
          <TextComponent>Disable chat</TextComponent>
        </HStack>

        <Container maxWidth={"300px"} pb="40px">
          <HStack
            justifyContent={"space-between"}
            py="20px"
            borderBottom={colorModeFunc(
              colors["borderBottom"],
              colors["borderBottomDark"]
            )}
          >
            <TextComponent rest={{ fontSize: "14px", fontWeight: "700" }}>
              Receive messages
            </TextComponent>
            <Switch colorScheme="green"></Switch>
          </HStack>
          <Box
            p="10px"
            borderBottom={colorModeFunc(
              colors["borderBottom"],
              colors["borderBottomDark"]
            )}
          >
            <TextComponent rest={{ fontSize: "14px", color: "#6c8EA0" }}>
              Chats help your customers to get in touch with you through
              messages on sociamaket platform. Enable this option to get
              messages from new customers.
            </TextComponent>
          </Box>
          <Box
            p="10px"
            borderBottom={colorModeFunc(
              colors["borderBottom"],
              colors["borderBottomDark"]
            )}
          >
            <TextComponent rest={{ fontSize: "14px" }}>
              If you don’t reply to your customers for a while we’ll have to
              disable buyers from starting new chats with you (current chats
              will remain active).
            </TextComponent>
          </Box>
        </Container>
      </Card>
    </SettingLayout>
  );
}
