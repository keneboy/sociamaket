import ProfileLayout from "../layouts/ProfileLayout";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaCheckCircle, FaLocationArrow, FaTimes } from "react-icons/fa";
import advert from "../assets/no-adverts-active.svg";
import colors from "../components/colors";
import { LoginButton } from "../components/auth/LoginButton";
import { useNavigate } from "react-router-dom";
import { SavedContext } from "../contextApi/SavedContext";
import { useContext } from "react";
import formatPrice from "../Utils/formatPrice";
import TextComponent from "../components/TextComponent";
import DeleteModal from "../components/DeleteModal";

export default function ProfileSaved() {
  const { state, dispatch } = useContext(SavedContext);
  const navigate = useNavigate();
  // handle the delete modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ProfileLayout title="saved">
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        handleDelete={() => {
          dispatch({ type: "REMOVE_ALL_PRODUCT" });
          onClose();
        }}
      />
      <Card flex={1}>
        <Box borderBottom="1px solid #eee">
          <HStack p="20px" justify={"space-between"}>
            <Heading as="h3" fontSize={"2xl"}>
              My saved
            </Heading>
            <Flex alignItems={"center"} gap="10px">
              <Box as="div">
                <Button>
                  <Icon as={FaCheckCircle} />
                  <Text as="span">Active</Text>
                  <Text as="span">(0)</Text>
                </Button>
              </Box>
              <LoginButton rest={{ w: "auto", opacity: ".5" }}>
                <HStack>
                  <TextComponent> Adverts </TextComponent>
                  <TextComponent>
                    ({" "}
                    {state.Saved && state.Saved.length > 0
                      ? state.Saved.length
                      : 0}
                    )
                  </TextComponent>
                </HStack>
              </LoginButton>
            </Flex>
          </HStack>
        </Box>

        {state?.Saved && state?.Saved.length > 0 ? (
          <Box mt="40px">
            <HStack justifyContent={"flex-end"} pr="20px">
              <Button
                variant={"link"}
                color={colors["primary"]}
                fontSize="12px"
                onClick={() => {
                  onOpen();
                }}
              >
                Clear all ads
              </Button>
            </HStack>

            <CardBody p="20px">
              <Stack gap="10px">
                {state.Saved.map((item, index) => (
                  <Card
                    key={index}
                    h="168px"
                    position={"relative"}
                    transition="box-shadow .5s"
                    _hover={{ boxShadow: "0px 0px 10px rgba(0,0,0,.5)" }}
                  >
                    <Flex height="100%" justifyContent={"space-between"}>
                      <Flex height="100%" gap="10px">
                        <Image src={item.images[0]} height="100%" w="224px" />
                        <Stack direction={"column"} py="10px" pl="10px">
                          <TextComponent
                            rest={{ fontWeight: "700", fontSize: "14px" }}
                          >
                            {item.title}
                          </TextComponent>
                          <TextComponent
                            rest={{
                              color: `${colors["primary"]}`,
                              fontWeight: "700",
                              fontSize: "14px",
                              overflow: "hidden",
                              lineHeight: "20px",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {formatPrice(item.price)}
                          </TextComponent>
                          <HStack>
                            <Badge
                              p="5px"
                              fontSize={"10px"}
                              textTransform="capitalize"
                            >
                              Foreign Used
                            </Badge>
                            <Badge
                              p="5px"
                              fontSize={"10px"}
                              textTransform="capitalize"
                            >
                              Automatic
                            </Badge>
                          </HStack>
                          <Box mt="auto!important">
                            <HStack>
                              <Icon as={FaLocationArrow} />
                              <TextComponent rest={{ fontSize: "12px" }}>
                                Lagos State, Lekki
                              </TextComponent>
                            </HStack>
                          </Box>
                        </Stack>
                      </Flex>
                      <Stack justifyContent={"flex-end "} py="10px" pr="10px">
                        <LoginButton
                          rest={{
                            fontSize: "14px",
                            h: "auto",
                            py: "10px",
                            bg: "transparent",
                            borderColor: `${colors["primary"]}`,
                            color: `${colors["primary"]}`,
                          }}
                          onSetClick={() => alert("chat")}
                        >
                          Chat
                        </LoginButton>
                        <LoginButton
                          rest={{
                            fontSize: "14px",
                            h: "auto",
                            py: "10px",
                          }}
                          onSetClick={() => alert("show contact")}
                        >
                          Show Contact
                        </LoginButton>
                      </Stack>
                    </Flex>
                    <Icon
                      as={FaTimes}
                      position={"absolute"}
                      top="10px"
                      right="10px"
                      color={colors["chakraColorsGray300"]}
                      cursor="pointer"
                      onClick={() => {
                        dispatch({ type: "REMOVE_PRODUCT", payload: item.id });
                      }}
                    />
                  </Card>
                ))}
              </Stack>
            </CardBody>
          </Box>
        ) : (
          <CardBody p="80px">
            <Flex direction={"column"} align="center">
              <Image src={advert} />
              <Text
                mt="40px"
                color={useColorModeValue(colors["chakraColorsGray600"], "#fff")}
              >
                It’s empty here...
              </Text>
              <LoginButton
                rest={{ w: "auto" }}
                onSetClick={() => navigate("/")}
              >
                Find Anything
              </LoginButton>
            </Flex>
          </CardBody>
        )}
      </Card>
    </ProfileLayout>
  );
}
