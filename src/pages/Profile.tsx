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
import { FaCheckCircle, FaQuestionCircle, FaThList } from "react-icons/fa";
import advert from "../assets/no-adverts-active.svg";
import colors from "../components/colors";
import ProfileLayout from "../layouts/ProfileLayout";
import colorModeFunc from "../Utils/colorModeFunc";

export default function Profile() {
  return (
    <ProfileLayout title="profile">
      <Card flex={1}>
        <Box
          borderBottom={colorModeFunc(
            colors["borderBottom"],
            colors["borderBottomDark"]
          )}
        >
          <HStack p="20px" justify={"space-between"}>
            <Heading as="h3" fontSize={"2xl"}>
              My adverts
            </Heading>
            <Box as="div">
              <Button>
                <Icon as={FaCheckCircle} />
                <Text as="span">Active</Text>
                <Text as="span">(0)</Text>
              </Button>
            </Box>
          </HStack>
        </Box>

        <CardBody p="80px">
          <Flex direction={"column"} align="center">
            <Image src={advert} />
            <Text
              mt="40px"
              color={useColorModeValue(colors["chakraColorsGray600"], "#fff")}
            >
              There are no adverts yet.
            </Text>
            <Text
              color={useColorModeValue(colors["chakraColorsGray600"], "#fff")}
            >
              Create new one now!
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </ProfileLayout>
  );
}
