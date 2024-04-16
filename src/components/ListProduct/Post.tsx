import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";

import Layouts from "../../layouts/Layouts";
import colors from "../colors";
import { IoIosArrowBack } from "react-icons/io";
import useGetMe from "../../hooks/useGetMe";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import Category from "./Category";
import Properties from "./Properties";

export default function Post() {
  const { type } = useParams();

  return (
    <Layouts isFooter={false}>
      <Box bg="#eee" minH="90vh" pb="40px">
        <Container pt="40px" maxWidth={"900px"}>
          <HStack
            bg="#fff"
            justifyContent={"space-between"}
            alignItems="center"
            p="15px"
            borderRadius={"5px"}
          >
            <HStack
              onClick={() => {
                window.history.back();
              }}
              cursor={"pointer"}
              visibility={type !== "category" ? "visible" : "hidden"}
            >
              <Icon as={IoIosArrowBack} />
              <Button variant="link" color={colors["primary"]}>
                Back
              </Button>
            </HStack>
            <Text fontWeight={"bold"}>Post ad</Text>
            <Button variant={"link"} color={colors["primary"]}>
              clear
            </Button>
          </HStack>

          {type === "category" && <Category />}
          {type === "properties" && <Properties />}
        </Container>
      </Box>
    </Layouts>
  );
}
