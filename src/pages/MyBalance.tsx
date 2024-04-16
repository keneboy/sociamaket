import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import advert from "../assets/no-adverts-active.svg";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import ProfileLayout from "../layouts/ProfileLayout";
import colorModeFunc from "../Utils/colorModeFunc";
import formatPrice from "../Utils/formatPrice";
import { LoginButton } from "../components/auth/LoginButton";

export default function MyBalance() {
  return (
    <ProfileLayout title="My balance">
      <Card flex={1}>
        <Box
          borderBottom={colorModeFunc(
            colors["borderBottom"],
            colors["borderBottomDark"]
          )}
        >
          <HStack p="20px" justify={"space-between"}>
            <Heading as="h3" fontSize={"20px"} fontWeight="700">
              My balance
            </Heading>
            <HStack>
              <Box
                w="112px"
                h="46px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                bg="#c2e8c6"
                borderRadius="16px"
                gap="5px"
              >
                <Icon as={MdEventNote} />
                <TextComponent rest={{ fontSize: "12px" }}>
                  Current
                </TextComponent>
              </Box>
              <Box
                w="112px"
                h="46px"
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
                borderRadius="16px"
                gap="5px"
              >
                <Icon as={GrHistory} />
                <TextComponent rest={{ fontSize: "12px" }}>
                  History
                </TextComponent>
              </Box>
            </HStack>
          </HStack>
        </Box>
        <HStack
          py="20px"
          mx="20px"
          gap="30px"
          borderBottom={colorModeFunc(colors["bBottom"], colors["bBottomDark"])}
        >
          <Box
            w="107px"
            h="70px"
            bg="#FADAB1"
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            borderRadius="10px"
          >
            <TextComponent rest={{ fontSize: "20px", fontWeight: "700" }}>
              {formatPrice(0)}
            </TextComponent>
          </Box>
          <TextComponent rest={{ fontSize: "14px" }}>
            Purchase Premium services, order delivery, or bid on an auction
            using your Balance
          </TextComponent>
          <LoginButton rest={{ bg: "#FEA03C", w: "auto" }}>
            Recharge
          </LoginButton>
        </HStack>
        <HStack flexDirection={"column"} alignItems="center" p="30px">
          <TextComponent rest={{ fontSize: "16px" }}>
            Want to sell faster?
          </TextComponent>
          <Button variant="link" color={colors["primary"]} fontSize="16px">
            Subscribe to Boost Plan
          </Button>
        </HStack>
      </Card>
    </ProfileLayout>
  );
}
