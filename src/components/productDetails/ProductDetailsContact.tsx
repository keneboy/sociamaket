import {
  Avatar,
  AvatarBadge,
  Button,
  Card,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  useColorModeValue,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import colors from "../colors";
import ReportAbuse from "../Modal/ReportAbuse";

import babies from "../../assets/babies.png";
export const ButtonVariant = ({
  children,
  rest,
  handleClick,
}: {
  children: ReactNode;
  rest?: any;
  handleClick?: () => void;
}) => {
  return (
    <Button
      variant={"outline"}
      color={useColorModeValue(`${colors["primary"]}`, "#fff")}
      fontSize="11px"
      {...rest}
      _hover={{
        bg: useColorModeValue("green.100", "#fff"),
        color: useColorModeValue(`${colors["primary"]}`, "#000"),
      }}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
const ListItemStyling = ({ children }: { children: ReactNode }) => {
  return <ListItem fontSize={"12px"}>{children}</ListItem>;
};

export default function ProductDetailsContact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexBasis="200px" direction={"column"}>
      <ReportAbuse
        isOpen={isOpen}
        onClose={onClose}
        handleDelete={() => {
          alert("calling manager right now");
        }}
      />
      <Card p="20px" w="100%">
        <Heading as="h2" fontSize="22px" mb="20px">
          ₦ 3,000,000, Negotiable
        </Heading>
        <HStack gap={"5px"}>
          <ButtonVariant>market price: ₦5.12M ~ ₦5.62M </ButtonVariant>
          <ButtonVariant>Price History </ButtonVariant>
        </HStack>
        <ButtonVariant
          rest={{
            fontSize: "14px",
            mt: "15px",
            borderColor: useColorModeValue(`${colors["primary"]}`, "grey"),
          }}
        >
          Request Call Back{" "}
        </ButtonVariant>
      </Card>
      <Card padding="20px" w="100%" mt="20px">
        <HStack gap={"5px"}>
          <WrapItem border={"1px solid grey"} borderRadius="50%">
            <Avatar src={babies} name="username">
              <AvatarBadge boxSize="1.2em" bg="green.500" />
            </Avatar>
          </WrapItem>

          <Button variant={"link"}>Femi Kayode</Button>
        </HStack>
        <ButtonVariant
          rest={{
            fontSize: "14px",
            mt: "15px",
            bg: "#00b53f",
            color: "#fff",
          }}
        >
          Show contact
        </ButtonVariant>
        <ButtonVariant
          rest={{
            fontSize: "14px",
            mt: "15px",
            borderColor: useColorModeValue(`${colors["primary"]}`, "grey"),
          }}
        >
          Start chat
        </ButtonVariant>
      </Card>
      <Card
        display={"flex"}
        p="20px 20px 20px 40px"
        mt="20px"
        direction={"column"}
        align="center"
      >
        <Heading fontSize={"2xl"}>Safety tips</Heading>
        <List p="0px" alignSelf={"flex-start"} listStyleType="revert">
          <ListItemStyling>
            Remember, don't send any pre-payments
          </ListItemStyling>
          <ListItemStyling>
            Meet the seller at a safe public place
          </ListItemStyling>
          <ListItemStyling>
            Inspect the goods to make sure they meet your needs
          </ListItemStyling>
          <ListItemStyling>
            Check all documentation and only pay if you're satisfied
          </ListItemStyling>
        </List>
      </Card>
      <Card p="20px" w="100%" mt="20px">
        <HStack gap={"5px"}>
          <ButtonVariant
            rest={{
              color: "blue",
              flex: "1",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Mark Unavailable
          </ButtonVariant>
          <ButtonVariant
            rest={{
              color: "red",
              flex: "1",
              fontSize: "14px",
              fontWeight: "bold",
            }}
            handleClick={onOpen}
          >
            Report Abuse{" "}
          </ButtonVariant>
        </HStack>
      </Card>
      <Card padding="20px" w="100%" mt="20px">
        <ButtonVariant
          rest={{
            fontSize: "14px",
            mt: "15px",
            borderColor: useColorModeValue(`${colors["primary"]}`, "grey"),
          }}
        >
          Post Ad Like This
        </ButtonVariant>
      </Card>
    </Flex>
  );
}
