import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function PopoverComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent width={"auto"}>
        <PopoverBody
          fontSize={"14px"}
          lineHeight="18px"
          p="15px 20px"
          _hover={{ bg: "#eeeeee" }}
          cursor="pointer"
        >
          Mark as Read
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
