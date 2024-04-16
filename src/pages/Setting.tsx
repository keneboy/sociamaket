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
  Stack,
  Button,
} from "@chakra-ui/react";
import colors from "../components/colors";
import Layouts from "../layouts/Layouts";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TextComponent from "../components/TextComponent";
import SettingLayout from "../layouts/SettingLayout";
import InputLabel from "../components/Setting/InputLabel";
import { LoginButton } from "../components/auth/LoginButton";
import Dropdown from "../components/dropdown/DropDown";
import NewDropdown from "../components/dropdown/NewDropdown";

export default function Setting() {
  const setting = [
    {
      title: "",
    },
  ];
  return (
    <SettingLayout title="Change password">
      <Card flex="1" alignSelf={"flex-start"}>
        <HStack
          borderBottom={colors["borderBottom"]}
          height="56px"
          pl="20px"
          alignItems={"center"}
        >
          <TextComponent>Change password</TextComponent>
        </HStack>
        <Container maxWidth={"400px"} mt="40px" pb="40px">
          {" "}
          <InputLabel label="Enter your current password" form_label="=" />
          <InputLabel label="New password" form_label="=" />
          <InputLabel label="Re-type new password" form_label="=" />
          <NewDropdown />
          <LoginButton>Change</LoginButton>
          <HStack justifyContent={"center"} mt="30px">
            <Button
              variant={"link"}
              color={colors["primary"]}
              fontSize={"12px"}
              fontWeight="700"
            >
              Forget Password?
            </Button>
          </HStack>
        </Container>
      </Card>
    </SettingLayout>
  );
}
