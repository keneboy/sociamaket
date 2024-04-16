import { Box, Flex, Text } from "@chakra-ui/react";
import colorModeFunc from "../../Utils/colorModeFunc";
import colors from "../colors";
import useDisclosure from "./useDisClosure";

export default function NewDropdown() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
      <input />
    </div>
  );
}
