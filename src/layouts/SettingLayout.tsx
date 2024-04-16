import {
  Box,
  Card,
  Container,
  List,
  ListItem,
  useColorModeValue,
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import colors from "../components/colors";
import Layouts from "../layouts/Layouts";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TextComponent from "../components/TextComponent";
import { ReactNode } from "react";
import colorModeFunc from "../Utils/colorModeFunc";
import { useNavigate, useLocation } from "react-router-dom";

export default function SettingLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  // handle the navigation ...
  const navigate = useNavigate();
  // handle the current navigation
  const location = useLocation();
  function determineCUrrentNavigation(path: string) {
    return location.pathname === path ? colors["primary"] : "inherit";
  }
  return (
    <Layouts isFooter={false} title={title}>
      <Box
        bg={useColorModeValue("gray.100", colors["chakraColorsGray800"])}
        minH="90vh"
        pt="34px"
        pb="40px"
      >
        <Container maxW="1280px">
          <Flex gap="20px">
            <Box w="344px">
              <Card>
                <List p="0" m="0">
                  <ListItem
                    bg="gray.100"
                    color={colorModeFunc("#000", "#000")}
                    p="20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                  >
                    <HStack alignItems={"center"} gap="5px">
                      <Icon as={IoIosArrowBack} />
                      <TextComponent>Settings</TextComponent>
                    </HStack>
                  </ListItem>
                  <ListItem
                    p="20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                    onClick={() =>
                      navigate("/profile/settings/contact-details")
                    }
                    color={determineCUrrentNavigation(
                      "/profile/settings/contact-details"
                    )}
                  >
                    <TextComponent>Personal details</TextComponent>
                  </ListItem>
                  <ListItem p="20px">
                    <HStack justifyContent={"space-between"}>
                      <TextComponent>Business details</TextComponent>
                      <Icon as={IoIosArrowForward} />
                    </HStack>
                  </ListItem>
                </List>
              </Card>
              <Card mt="20px">
                <List p="0" m="0">
                  <ListItem
                    p="20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                    onClick={() => navigate("/profile/settings/phone")}
                    cursor="pointer"
                    color={determineCUrrentNavigation(
                      "/profile/settings/phone"
                    )}
                  >
                    <TextComponent>Change phone number</TextComponent>
                  </ListItem>
                  <ListItem
                    p="20px"
                    onClick={() => navigate("/profile/settings/email")}
                    color={determineCUrrentNavigation(
                      "/profile/settings/email"
                    )}
                  >
                    <TextComponent>Change email</TextComponent>
                  </ListItem>
                </List>
              </Card>
              <Card mt="20px">
                <List p="0" m="0">
                  <ListItem
                    p="20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                    onClick={() => navigate("/profile/settings/chats")}
                    color={determineCUrrentNavigation(
                      "/profile/settings/chats"
                    )}
                  >
                    <TextComponent>Disable Chat</TextComponent>
                  </ListItem>
                  <ListItem
                    p="20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                  >
                    <TextComponent>Disable feedback</TextComponent>
                  </ListItem>
                  <ListItem
                    p="20px"
                    onClick={() => navigate("/profile/settings/notification")}
                    color={determineCUrrentNavigation(
                      "/profile/settings/notification"
                    )}
                  >
                    <TextComponent>Manage Notification</TextComponent>
                  </ListItem>
                </List>
              </Card>
              <Card mt="20px">
                <List p="0" m="0">
                  <ListItem
                    p="20px"
                    onClick={() =>
                      navigate("/profile/settings/change-password")
                    }
                    color={determineCUrrentNavigation(
                      "/profile/settings/change-password"
                    )}
                  >
                    <TextComponent>Change password</TextComponent>
                  </ListItem>
                  <ListItem
                    p="20px"
                    onClick={() => navigate("/profile/settings/delete")}
                    color={determineCUrrentNavigation(
                      "/profile/settings/delete"
                    )}
                  >
                    <TextComponent>Delete account permanently</TextComponent>
                  </ListItem>
                  <ListItem p="20px">
                    <TextComponent>Log out</TextComponent>
                  </ListItem>
                </List>
              </Card>
            </Box>
            {children}
          </Flex>
        </Container>
      </Box>
    </Layouts>
  );
}
