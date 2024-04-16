import {
  Box,
  Card,
  Container,
  HStack,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import { LoginButton } from "../components/auth/LoginButton";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import SettingLayout from "../layouts/SettingLayout";

import colorModeFunc from "../Utils/colorModeFunc";
export default function ManageNotification() {
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
          <TextComponent>Manage notification</TextComponent>
        </HStack>

        <Container maxWidth={"442px"} pb="40px">
          <Card
            mt="20px"
            bg={colorModeFunc("#fff", colors["chakraColorsGray800"])}
          >
            <TextComponent
              rest={{ fontSize: "14px", fontWeight: "700", p: "20px" }}
            >
              Email notifications
            </TextComponent>
            <HStack
              justifyContent={"space-between"}
              mt="0px"
              p="20px"
              borderBottom={colorModeFunc(
                colors["borderBottom"],
                colors["borderBottomDark"]
              )}
            >
              <TextComponent rest={{ fontSize: "14px" }}>
                Hot deals and recommendations
              </TextComponent>
              <Switch colorScheme={"green"} size="md"></Switch>
            </HStack>
            <List p="0" m="0">
              <ListItem>
                <HStack
                  justifyContent={"space-between"}
                  p="20px"
                  borderBottom={colorModeFunc(
                    colors["borderBottom"],
                    colors["borderBottomDark"]
                  )}
                >
                  <TextComponent rest={{ fontSize: "14px" }}>
                    Info about your Ads
                  </TextComponent>
                  <Switch colorScheme={"green"} size="md"></Switch>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack
                  justifyContent={"space-between"}
                  p="20px"
                  borderBottom={colorModeFunc(
                    colors["borderBottom"],
                    colors["borderBottomDark"]
                  )}
                >
                  <TextComponent rest={{ fontSize: "14px" }}>
                    Premium packages
                  </TextComponent>
                  <Switch colorScheme={"green"} size="md"></Switch>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack
                  justifyContent={"space-between"}
                  p="20px"
                  borderBottom={colorModeFunc(
                    colors["borderBottom"],
                    colors["borderBottomDark"]
                  )}
                >
                  <TextComponent rest={{ fontSize: "14px" }}>
                    Your subscriptions
                  </TextComponent>
                  <Switch colorScheme={"green"} size="md"></Switch>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack
                  justifyContent={"space-between"}
                  p="20px"
                  borderBottom={colorModeFunc(
                    colors["borderBottom"],
                    colors["borderBottomDark"]
                  )}
                >
                  <TextComponent rest={{ fontSize: "14px" }}>
                    Messages
                  </TextComponent>
                  <Switch colorScheme={"green"} size="md"></Switch>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack justifyContent={"space-between"} p="20px">
                  <TextComponent rest={{ fontSize: "14px" }}>
                    Feedback
                  </TextComponent>
                  <Switch colorScheme={"green"} size="md"></Switch>
                </HStack>
              </ListItem>
            </List>
          </Card>
          <List p="0" mt="20px">
            <ListItem
              bg={colorModeFunc("#fff", colors["chakraColorsGray800"])}
              borderRadius="10px"
            >
              <HStack
                justifyContent={"space-between"}
                p="20px"
                border={colorModeFunc(
                  colors["borderBottom"],
                  colors["borderBottomDark"]
                )}
                mb="20px"
              >
                <TextComponent rest={{ fontSize: "14px", fontWeight: "700" }}>
                  SMS info notification
                </TextComponent>
                <Switch colorScheme={"green"} size="md"></Switch>
              </HStack>
            </ListItem>
            <ListItem
              bg={colorModeFunc("#fff", colors["chakraColorsGray800"])}
              borderRadius="10px"
            >
              <HStack
                justifyContent={"space-between"}
                p="20px"
                border={colorModeFunc(
                  colors["borderBottom"],
                  colors["borderBottomDark"]
                )}
              >
                <TextComponent rest={{ fontSize: "14px", fontWeight: "700" }}>
                  sociamaket web notifications
                </TextComponent>
                <Switch colorScheme={"green"} size="md"></Switch>
              </HStack>
            </ListItem>
          </List>
        </Container>
      </Card>
    </SettingLayout>
  );
}
