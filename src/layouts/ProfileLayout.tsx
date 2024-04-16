import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheckCircle, FaQuestionCircle, FaThList } from "react-icons/fa";
import advert from "../assets/no-adverts-active.svg";
import Layouts from "../layouts/Layouts";
import colors from "../components/colors";
import { RxPerson } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiWallet, GiShadowFollower } from "react-icons/gi";
import { FiPhoneCall } from "react-icons/fi";
import { MdFeedback } from "react-icons/md";
import { ReactNode } from "react";
import DeleteModal from "../components/DeleteModal";
import { Link } from "react-router-dom";
import colorModeFunc from "../Utils/colorModeFunc";
import { useNavigate } from "react-router-dom";
import useGetMe from "../hooks/useGetMe";
import formattedName from "../Utils/formattedName";
const LinkComponent = ({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) => {
  return (
    <Link to={path} style={{ display: "flex", gap: "10px" }}>
      {children}
    </Link>
  );
};
const Customedtext = ({ children }: { children: ReactNode }) => {
  return (
    <Text as={"span"} _hover={{ color: colors["primary"] }}>
      {children}
    </Text>
  );
};

export default function ProfileLayout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // navigate
  const navigate = useNavigate();
  function navigateFunc(path: string) {
    return navigate(path);
  }
  // handle the getMe hook
  const { data } = useGetMe();
  console.log(data, "me");
  return (
    <Layouts title={title}>
      <>
        <DeleteModal
          isOpen={isOpen}
          onClose={onClose}
          handleDelete={() => {
            alert("calling manager right now");
          }}
          label="Do you want sociamaket Manager to call you?"
        />
        <Box bg={useColorModeValue("gray.100", colors["chakraColorsGray800"])}>
          <Flex
            maxW="1200px"
            m="0 auto"
            py="40px"
            gap="30px"
            align={"flex-start"}
          >
            <Box w="350px">
              <Card position={"relative"} p="20px">
                <HStack
                  position={"absolute"}
                  top="10px"
                  right="10px"
                  onClick={() =>
                    navigateFunc("/profile/settings/contact-details")
                  }
                  cursor="pointer"
                >
                  <Text as="span" fontSize={"12px"} fontWeight="bold">
                    Settings
                  </Text>
                  <Icon as={AiOutlineSetting} />
                </HStack>
                <Flex direction={"column"} align="center">
                  <Flex
                    w="100px"
                    h="100px"
                    bg={data?.data?.picture ? "transparent" : "green.100"}
                    align="center"
                    justify={"center"}
                    borderRadius="50%"
                    overflow={"hidden"}
                    mt="40px"
                  >
                    {data?.data?.picture ? (
                      <Image src={data?.data?.picture} />
                    ) : (
                      <Icon as={RxPerson} fontSize="6xl" color={"#fff"} />
                    )}
                  </Flex>
                  <Text fontWeight={"bold"} fontSize="25px" mt="10px">
                    {`${formattedName(
                      data?.data?.first_name || ""
                    )} ${formattedName(data?.data?.last_name || "")}`}
                  </Text>
                  <Text p="0" m="0" color={colors["chakraColorsGray500"]}>
                    {data?.data?.phone_no || ""}
                  </Text>
                </Flex>
                <HStack mt="60px" align={"center"} gap="10px" cursor="pointer">
                  <Icon as={FcMoneyTransfer} />
                  <Text as="span" p="0" m="0">
                    Make Money
                  </Text>
                </HStack>
              </Card>
              <Card p="10px 20px" mt="20px">
                <HStack
                  gap="10px"
                  onClick={() => navigateFunc("/profile/my-balance/current")}
                  cursor="pointer"
                >
                  <Icon as={GiWallet} fontSize="2xl" />
                  <Flex direction={"column"}>
                    <Customedtext>₦ 0</Customedtext>
                    <Text as="span" color={colors["chakraColorsGray500"]}>
                      Balance
                    </Text>
                  </Flex>
                </HStack>
              </Card>
              <Card p="10px 20px" mt="20px">
                <HStack gap="10px" cursor="pointer">
                  <Icon as={GiShadowFollower} fontSize="2xl" />
                  <Customedtext>Followers</Customedtext>
                </HStack>
              </Card>
              <Card mt="20px" p="0">
                <List p="0" m="0">
                  <ListItem
                    p="10px 20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                  >
                    <HStack
                      gap="10px"
                      cursor="pointer"
                      onClick={() => navigateFunc("/profile/adverts")}
                    >
                      <Icon as={FaThList} fontSize="2xl" />
                      <Customedtext>My Advert</Customedtext>
                    </HStack>
                  </ListItem>
                  <ListItem p="10px 20px">
                    <HStack gap="10px" cursor="pointer">
                      <Icon as={MdFeedback} fontSize="2xl" />
                      <Customedtext>Feedback</Customedtext>
                    </HStack>
                  </ListItem>
                </List>
              </Card>
              <Card mt="20px" p="0">
                <List p="0" m="0">
                  <ListItem
                    p="10px 20px"
                    borderBottom={colorModeFunc(
                      colors["borderBottom"],
                      colors["borderBottomDark"]
                    )}
                  >
                    <HStack gap="10px" onClick={onOpen} cursor="pointer">
                      <Icon as={FiPhoneCall} fontSize="2xl" />
                      <Customedtext>Manager's call</Customedtext>
                    </HStack>
                  </ListItem>
                  <ListItem
                    p="10px 20px"
                    onClick={() => navigateFunc("/faq")}
                    cursor="pointer"
                  >
                    <HStack gap="10px">
                      <Icon as={FaQuestionCircle} fontSize="2xl" />
                      <Customedtext>Frequently Asked Questions</Customedtext>
                    </HStack>
                  </ListItem>
                </List>
              </Card>
            </Box>

            {children}
          </Flex>
        </Box>
      </>
    </Layouts>
  );
}
