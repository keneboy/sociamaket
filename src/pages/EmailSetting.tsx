import {
  Badge,
  Box,
  Card,
  Container,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { LoginButton } from "../components/auth/LoginButton";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import SettingLayout from "../layouts/SettingLayout";
import InputLabel from "../components/Setting/InputLabel";
import { HiPencil } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import colorModeFunc from "../Utils/colorModeFunc";
export default function EmailSetting() {
  const [activate, setActivate] = useState(false);
  const [number, setNumber] = useState(false);
  return (
    <SettingLayout title="Email settings">
      <Card flex="1" alignSelf={"flex-start"}>
        <HStack
          borderBottom={colors["borderBottom"]}
          height="56px"
          px="20px"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <TextComponent>Change email</TextComponent>
        </HStack>

        <Container maxWidth={"400px"} mt="40px" pb="40px">
          {activate && number ? (
            <>
              <InputLabel
                label="New phone number"
                isPassword={false}
                form_label="new_phone_no"
              />
              <LoginButton>Next</LoginButton>
            </>
          ) : activate ? (
            <>
              <Badge
                w="100%"
                p="30px 80px"
                textAlign={"center"}
                whiteSpace="normal"
                textTransform={"initial"}
                fontWeight="700"
                fontSize={"14px"}
              >
                There are two ways to change your phone number:
              </Badge>
              <Card
                bg={colorModeFunc("#fff", colors["chakraColorsGray800"])}
                mb="20px"
                p="20px 10px"
                mt="20px"
                onClick={() => setNumber(true)}
              >
                <HStack>
                  <Box as="div">
                    <Badge
                      w="40px"
                      h="40px"
                      borderRadius={"50%"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      colorScheme={"green"}
                    >
                      <Icon
                        as={MdPhoneInTalk}
                        fontSize="20px"
                        color={colors["primary"]}
                      />
                    </Badge>
                  </Box>
                  <Stack spacing={"0"} mr="auto!important">
                    <TextComponent>Answer call on 08149229891</TextComponent>
                    <TextComponent rest={{ color: "#99b2bf" }}>
                      if you are able to
                    </TextComponent>
                  </Stack>
                  <Icon as={IoIosArrowForward} />
                </HStack>
              </Card>
              <Card
                bg={colorModeFunc("#fff", colors["chakraColorsGray800"])}
                mb="20px"
                p="20px 10px"
                mt="20px"
              >
                <HStack>
                  <Box as="div">
                    <Badge
                      w="40px"
                      h="40px"
                      borderRadius={"50%"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      colorScheme={"green"}
                    >
                      <Icon
                        as={ImAttachment}
                        fontSize="20px"
                        color={colors["primary"]}
                      />
                    </Badge>
                  </Box>
                  <Stack spacing={"0"} mr="auto!important">
                    <TextComponent>Attach your ID</TextComponent>
                    <TextComponent rest={{ color: "#99b2bf" }}>
                      if you lost your old phone number
                    </TextComponent>
                  </Stack>
                  <Icon as={IoIosArrowForward} />
                </HStack>
              </Card>
            </>
          ) : (
            <>
              <HStack alignItems={"flex-start"}>
                <InputLabel
                  label="Your e-mail"
                  isPassword={false}
                  form_label="no"
                />
                <Box as="div">
                  <Badge
                    width="55px"
                    height={"55px"}
                    display="flex"
                    alignItems={"center"}
                    justifyContent="center"
                    cursor={"pointer"}
                    onClick={() => setActivate(true)}
                  >
                    <Icon as={HiPencil} fontSize="25px" />
                  </Badge>
                </Box>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color={colors["primary"]} />
                <TextComponent rest={{ fontSize: "12px" }}>
                  Confirmed
                </TextComponent>
              </HStack>
            </>
          )}
        </Container>
      </Card>
    </SettingLayout>
  );
}
