import { Input, Icon, HStack } from "@chakra-ui/react";

import colors from "../colors";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent } from "react";
interface Props {
  onSelectInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function FaqSearchComponent({ onSelectInputChange }: Props) {
  return (
    <HStack
      maxWidth="500px"
      width="100%"
      bg={colors["white"]}
      padding="8px 15px"
    >
      <Icon as={FaSearch} color={colors["primary"]} cursor="pointer" />
      <Input
        placeholder="Search in Frequently Asked Questions..."
        variant="unstyled"
        _placeholder={{ color: "gray.500" }}
        bg={colors["white"]}
        color={"gray.500"}
        onChange={(event) => onSelectInputChange(event)}
      />
    </HStack>
  );
}
