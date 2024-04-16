import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import TextComponent from "../components/TextComponent";
import Layouts from "../layouts/Layouts";
import realEstate from "../assets/premium-category-real-estate.png";
import cars from "../assets/premium-category-cars.png";
import others from "../assets/premium-category-others.png";
import colors from "../components/colors";
import { LoginButton } from "../components/auth/LoginButton";
import { Link } from "react-router-dom";
import colorModeFunc from "../Utils/colorModeFunc";

export default function PremiumService() {
  return (
    <Layouts isFooter={false}>
      {" "}
      <Box
        bg={colorModeFunc("#eee", colors["chakraColorsGray900"])}
        minH="90vh"
        pb="40px"
      >
        <Container pt="40px" maxWidth={"1100px"}>
          <Stack alignItems={"center"}>
            <TextComponent>
              Increase your sales with sociamaket Premium Services!
            </TextComponent>
            <TextComponent>
              Choose the right category for your ads and start selling faster
            </TextComponent>
          </Stack>

          <SimpleGrid minChildWidth="300px" spacing={5} mt="40px">
            <Card
              bg={colors["buttonColor"]}
              color={"#fff"}
              p="20px"
              transition="transform  .5s"
              _hover={{ transform: "scale(1.09)" }}
            >
              <Link to="/sc/boost/real_estate" style={{ color: "inherit" }}>
                <HStack>
                  <Box>
                    <Image src={realEstate} boxSize="100px" />
                  </Box>
                  <CardBody>
                    <Heading as="h3" fontSize={"16px"}>
                      Boost Sale in{" "}
                    </Heading>
                    <Heading as="h3" fontSize={"16px"}>
                      Property{" "}
                    </Heading>
                  </CardBody>
                </HStack>
              </Link>
            </Card>
            <Card
              bg={colors["primary"]}
              color={"#fff"}
              p="20px"
              transition="transform  .5s"
              _hover={{ transform: "scale(1.09)" }}
            >
              <HStack>
                <Box>
                  <Image src={cars} boxSize="100px" />
                </Box>
                <CardBody>
                  <Heading as="h3" fontSize={"16px"}>
                    Boost Sale in{" "}
                  </Heading>
                  <Heading as="h3" fontSize={"16px"}>
                    Cars{" "}
                  </Heading>
                </CardBody>
              </HStack>
            </Card>
            <Card
              bg="#000"
              color={"#fff"}
              p="20px"
              transition="transform  .5s"
              _hover={{ transform: "scale(1.09)" }}
            >
              <HStack>
                <Box>
                  <Image src={realEstate} boxSize="100px" />
                </Box>
                <CardBody>
                  <Heading as="h3" fontSize={"16px"}>
                    Boost Sale in{" "}
                  </Heading>
                  <Heading as="h3" fontSize={"16px"}>
                    Others{" "}
                  </Heading>
                </CardBody>
              </HStack>
            </Card>
          </SimpleGrid>
          <Flex justifyContent={"center"}>
            <LoginButton
              rest={{
                mt: "40px",
                width: "400px",
                bg: "transparent",
                border: `1px solid ${colors["primary"]}`,
                color: `${colors["primary"]}`,
                _hover: '{{ transform: "scale(1.09)" }}',
              }}
            >
              How does it works?
            </LoginButton>
          </Flex>
        </Container>
      </Box>
    </Layouts>
  );
}
