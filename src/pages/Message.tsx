import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Icon,
  Button,
  Stack,
  Input,
  List,
  ListItem,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePaperClip } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import Layouts from "../layouts/Layouts";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import colorModeFunc from "../Utils/colorModeFunc";
interface messageProps {
  name: string;
  time: string;
  msg: string;
  person: string;
}
const socket = io("http://localhost:8080");
export default function Message() {
  const customedRef = useRef<boolean>(false);
  const messageRef = useRef<HTMLUListElement>(null);
  const [newMessage, setNewMessage] = useState<messageProps[]>([
    {
      name: "Ekene samuel",
      time: "20.00pm",
      msg: "Welcome to this amazing group and we are very delightful to have you around",
      person: "sender",
    },
    {
      name: "Ekene samuel",
      time: "20.00pm",
      msg: "wow i love you warm welcome",
      person: "receiver",
    },
    {
      name: "Ekene samuel",
      time: "20.00pm",
      msg: "am already feeling like a family already",
      person: "receiver",
    },
    {
      name: "Ekene samuel",
      time: "20.00pm",
      msg: "Welcome to this amazing group and we are very delightful to have you around",
      person: "receiver",
    },
  ]);

  // get the input field and store on the input field state
  const getCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString(); // Format the time as needed
  };
  const [inputField, setInputField] = useState("");
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      socket.emit("send_message", {
        name: "Ekene samuel",
        time: getCurrentTime(),
        msg: inputField,
        person: "sender",
      });
      setInputField("");
    }
  };

  useEffect(() => {
    if (customedRef.current === false) {
      socket.on("message", (msg) => {
        setNewMessage((prev) => [...prev, msg]);
      });
    }
    if (messageRef.current) {
      console.log("message ref", messageRef.current.scrollHeight);
      messageRef.current.scrollBy({
        top: messageRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }

    return () => {
      customedRef.current = true;
    };
  }, [socket]);
  return (
    <Layouts isFooter={false}>
      <Box
        bg={colorModeFunc("#D1DFE5", colors["chakraColorsGray800"])}
        minH="90vh"
        pb="40px"
      >
        <Container pt="40px" maxWidth={"1200px"}>
          <Flex h="80vh">
            <Box
              flex="0 1 30%"
              bg={colorModeFunc("#fff", colors["chakraColorsGray600"])}
            >
              <HStack
                borderBottom={"1px solid #ccc"}
                justifyContent="space-between"
                p="20px"
              >
                <Text p="0" m="0" color={colors["primary"]}>
                  My messages
                </Text>
                <Icon as={GiHamburgerMenu} boxSize="25px" cursor={"pointer"} />
              </HStack>
            </Box>
            <Box flex="0 1 70%">
              {false ? (
                <>
                  <Stack
                    alignItems={"center"}
                    justifyContent="center"
                    h="100%"
                    bg="#FFFFE0"
                  >
                    <TextComponent rest={{ fontSize: "12px" }}>
                      You have no messages yet.
                    </TextComponent>
                    <TextComponent rest={{ fontSize: "12px" }}>
                      Find things to discuss or sell something
                    </TextComponent>
                    <Button
                      textTransform={"uppercase"}
                      bg={colors["buttonColor"]}
                      fontSize="12px"
                      variant={"solid"}
                      color="#fff"
                    >
                      Post Ad
                    </Button>
                  </Stack>
                </>
              ) : (
                <Stack
                  h="100%"
                  bg={colorModeFunc("#f2f2f2", colors["chakraColorsGray700"])}
                  position="relative"
                >
                  <Flex h={`calc(100% - 56px)`} w="100%" p="10px">
                    <List
                      p="0"
                      display={"flex"}
                      flexDirection="column"
                      gap="10px"
                      w="100%"
                      ref={messageRef}
                      overflowY={"scroll"}
                    >
                      {newMessage.map((item, index) => (
                        <ListItem
                          key={index}
                          bg={item.person === "receiver" ? "#d9fec2" : "#fff"}
                          borderRadius="10px"
                          alignSelf={
                            item.person === "receiver"
                              ? "flex-end"
                              : "flex-start"
                          }
                          padding="10px"
                        >
                          <TextComponent
                            rest={{ fontSize: "13px", color: "#000" }}
                          >
                            {item.msg}
                          </TextComponent>
                          <HStack
                            justifyContent={
                              item.person === "receiver"
                                ? "flex-end"
                                : "flex-start"
                            }
                          >
                            {" "}
                            <TextComponent
                              rest={{
                                fontSize: "10px",
                                color: colors["chakraColorsGray500"],
                              }}
                            >
                              {item.time}
                            </TextComponent>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </Flex>
                  <Box
                    position="absolute"
                    height="56px"
                    width={`calc(100% - 4px)`}
                    bg="#fff"
                    left="4px"
                    bottom="0"
                  >
                    <HStack
                      h="100%"
                      gap="20px"
                      pr="10px"
                      bg={colorModeFunc("#fff", colors["chakraColorsGray900"])}
                    >
                      {" "}
                      <Input
                        h="100%"
                        placeholder="Write your message here"
                        border="none"
                        focusBorderColor="none"
                        _focus={{
                          boxShadow: "none",
                          border: "none",
                        }}
                        value={inputField}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          setInputField(event.target.value)
                        }
                        onKeyDown={handleKeyDown}
                      />
                      <Icon as={HiOutlinePaperClip} fontSize="30px" />
                      {inputField && inputField.length > 0 ? (
                        <Icon as={MdSend} fontSize="30px" />
                      ) : (
                        <Icon as={FaMicrophone} fontSize="30px" />
                      )}
                    </HStack>
                  </Box>
                </Stack>
              )}
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layouts>
  );
}
