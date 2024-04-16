import {
  Box,
  Card,
  Container,
  Flex,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import colors from "../components/colors";
import TextComponent from "../components/TextComponent";
import Layouts from "../layouts/Layouts";
import Data from "../components/faq/faq";
import FaqSearchComponent from "../components/faq/FaqSearchComponent";
import { useState } from "react";
import colorModeFunc from "../Utils/colorModeFunc";
export default function Faq() {
  const [search, setSearch] = useState(Data);
  function filtered(str: string) {
    const result = Data.map((category) => ({
      name: category.name,
      data: category.data.filter((item) =>
        item.title.toLowerCase().includes(str.toLowerCase())
      ),
    }))
      .filter((arr) => arr.data.length > 0)
      .map((item) => ({
        name: item.name,
        data: item.data.map((x) => ({
          title: str && str.length > 0 ? highlightText(x.title, str) : x.title,
        })),
      }));
    setSearch(result);
  }
  function highlightText(text: string, str: string) {
    const regex = new RegExp(`(${str})`, "gi");
    return text.replace(regex, `<Box>${str}</Box>`);
  }
  return (
    <Layouts isFooter={false}>
      <Box
        bg={useColorModeValue("gray.100", colors["chakraColorsGray800"])}
        minH="90vh"
        pt="34px"
      >
        <Container maxW="1280px">
          <TextComponent
            rest={{
              textTransform: "capitalize",
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions
          </TextComponent>
          <Flex gap="30px">
            <Box flex="0 1 30%">
              <Box
                h="72px"
                bg="#c2e8c6"
                w="full"
                display={"flex"}
                alignItems="center"
                px="15px"
              >
                <FaqSearchComponent
                  onSelectInputChange={(event) => filtered(event.target.value)}
                />
              </Box>
              {search.map(({ name, data }, index) => {
                return (
                  <>
                    <TextComponent
                      rest={{
                        fontSize: "12px",
                        pl: "25px",
                        color: "6C8EA0",
                        py: "5px",
                        textTransform: "uppercase",
                      }}
                      key={index}
                    >
                      {name}
                    </TextComponent>
                    <Card>
                      <List p="0" m="0">
                        {data.map((item, x) => (
                          <ListItem
                            key={x}
                            {...(x === data.length - 1
                              ? {}
                              : {
                                  borderBottom: `${colorModeFunc(
                                    colors["borderBottom"],
                                    colors["borderBottomDark"]
                                  )}`,
                                })}
                            p="15px"
                            fontSize={"14px"}
                            cursor="pointer"
                            _hover={{ color: `${colors["primary"]}` }}
                          >
                            {item.title}
                          </ListItem>
                        ))}
                      </List>
                    </Card>
                    {/* {data.map((item)=> )} */}
                  </>
                );
              })}
            </Box>
            <Box flex="1">
              <Card>
                <Box
                  h="72px"
                  borderBottom={colorModeFunc(
                    colors["borderBottom"],
                    colors["borderBottomDark"]
                  )}
                  display="flex"
                  alignItems={"center"}
                  pl="30px"
                >
                  <TextComponent>How do I contact Support Team?</TextComponent>
                </Box>
              </Card>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layouts>
  );
}
