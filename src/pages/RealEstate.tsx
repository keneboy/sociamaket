import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  HStack,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import Layouts from "../layouts/Layouts";
import rsData from "../components/RealEstate/data";
import TextComponent from "../components/TextComponent";
import colors from "../components/colors";
import { BsStars } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";
import { FaMedal, FaRegGem, FaCrown, FaTimes } from "react-icons/fa";

import formatPrice from "../Utils/formatPrice";
import RealList from "../components/RealEstate/RealList";
import colorModeFunc from "../Utils/colorModeFunc";

export default function RealEstate() {
  return (
    <Layouts isFooter={false} title="Boost plan for real estate">
      <Box bg={colorModeFunc("#D1DFE5", "#000")} minH="90vh" pb="120px">
        <Heading fontSize={"18px"} pt="20px" pl="20px" mb="40px">
          Choose the plan in Property that works for you
        </Heading>
        <Flex overflowX={"scroll"} mr="40px" gap="20px">
          <List p="0" pt="105px" whiteSpace={"nowrap"} pl="20px">
            {rsData.map((item, index) => (
              <ListItem
                key={index}
                fontSize="12px"
                py="10px"
                borderBottom="1px dotted #ccc"
              >
                {item.name}
              </ListItem>
            ))}
          </List>
          <Flex gap="20px" whiteSpace={"nowrap"}>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="40px" py="10px" bg={colors["chakraColorsGray100"]}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  Free{" "}
                </TextComponent>
                <Badge
                  borderRadius={"30px"}
                  bg={colors["primary"]}
                  fontSize="8px"
                  px="10px"
                  py="2px"
                  color="#fff"
                  textTransform={"lowercase"}
                >
                  active
                </Badge>
              </HStack>
              <Flex height="60px" borderBottom={"1px dotted #ccc"}></Flex>
              <RealList />
            </Card>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="60px" py="10px" bg={"#fea03c"}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  Basic{" "}
                </TextComponent>
              </HStack>
              <Flex
                height="60px"
                borderBottom={"1px dotted #ccc"}
                justifyContent="center"
                alignItems={"center"}
              >
                <TextComponent rest={{ fontWeight: "bold" }}>
                  {formatPrice(1199)}
                </TextComponent>
              </Flex>
              <RealList />
            </Card>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="40px" py="10px" bg={"#fff4e4"}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  Premium
                </TextComponent>
                <Icon as={BsStars} />
              </HStack>
              <Flex
                height="60px"
                borderBottom={"1px dotted #ccc"}
                justifyContent="center"
                alignItems={"center"}
              >
                <TextComponent rest={{ fontWeight: "bold" }}>
                  {formatPrice(1599)}
                </TextComponent>
              </Flex>
              <RealList />
            </Card>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="60px" py="10px" bg={"#fff4e4"}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  VIP
                </TextComponent>
                <Icon as={GiQueenCrown} />
              </HStack>
              <Flex
                height="60px"
                borderBottom={"1px dotted #ccc"}
                justifyContent="center"
                alignItems={"center"}
              >
                <TextComponent rest={{ fontWeight: "bold" }}>
                  {formatPrice(2599)}
                </TextComponent>
              </Flex>
              <RealList />
            </Card>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="40px" py="10px" bg={"#fff4e4"}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  VIP GOLD
                </TextComponent>
                <Icon as={FaMedal} />
              </HStack>
              <Flex
                height="60px"
                borderBottom={"1px dotted #ccc"}
                justifyContent="center"
                alignItems={"center"}
              >
                <TextComponent rest={{ fontWeight: "bold" }}>
                  {formatPrice(3199)}
                </TextComponent>
              </Flex>
              <RealList />
            </Card>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="40px" py="10px" bg={"#fff4e4"}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  Diamond
                </TextComponent>
                <Icon as={FaRegGem} />
              </HStack>
              <Flex
                height="60px"
                borderBottom={"1px dotted #ccc"}
                justifyContent="center"
                alignItems={"center"}
              >
                <TextComponent rest={{ fontWeight: "bold" }}>
                  {formatPrice(3699)}
                </TextComponent>
              </Flex>
              <RealList />
            </Card>
            <Card borderRadius={"10px"} overflow="hidden">
              <HStack px="40px" py="10px" bg={"#fff4e4"}>
                <TextComponent rest={{ fontWeight: "bold", color: "#000" }}>
                  Enterprise
                </TextComponent>
                <Icon as={FaCrown} />
              </HStack>
              <Flex
                height="60px"
                borderBottom={"1px dotted #ccc"}
                justifyContent="center"
                alignItems={"center"}
              >
                <TextComponent rest={{ fontWeight: "bold" }}>
                  {formatPrice(6399)}
                </TextComponent>
              </Flex>
              <RealList />
            </Card>
          </Flex>
        </Flex>
        <Flex
          position="fixed"
          bottom="0"
          width="100%"
          px="20px"
          py="30px"
          gap="10px"
          boxShadow={"10px 10px 2px rgba(0,0,0,1)"}
          bg={colorModeFunc("#fff", colors["chakraColorsGray800"])}
        >
          <Button
            variant={"outline"}
            borderRadius="20px"
            borderColor={colors["primary"]}
          >
            1 months
          </Button>
          <Button
            variant={"outline"}
            borderRadius="20px"
            borderColor={colors["primary"]}
          >
            3 months
          </Button>
          <Badge
            display={"flex"}
            bg={colors["primary"]}
            marginLeft="auto"
            alignItems={"center"}
            padding="10px"
            minW={"300px"}
            color="#fff"
            gap="5px"
          >
            <TextComponent>BUY</TextComponent>
            <TextComponent
              rest={{
                textDecoration: "line-through",
                marginLeft: "auto",
                color: "#fff",
                opacity: 0.5,
              }}
            >
              {formatPrice(12999)}
            </TextComponent>
            <TextComponent>{formatPrice(11999)}</TextComponent>
          </Badge>
        </Flex>
      </Box>
    </Layouts>
  );
}
