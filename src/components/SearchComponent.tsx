import { Box, Input, Icon, HStack } from "@chakra-ui/react";

import colors from "./colors";
import { FaSearch } from "react-icons/fa";

export default function SearchComponent() {
  return (
    <HStack
      maxWidth="500px"
      width="100%"
      bg={colors["white"]}
      padding="15px 15px"
    >
      <Input
        placeholder="I am looking for...."
        variant="unstyled"
        _placeholder={{ color: "gray.500" }}
        bg={colors["white"]}
        color={"gray.500"}
      />
      <Icon as={FaSearch} color={colors["primary"]} cursor="pointer" />
    </HStack>
  );
}
