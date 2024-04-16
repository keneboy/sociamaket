import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function TextComponent({
  children,
  rest,
}: {
  children: ReactNode;
  rest?: any;
}) {
  return (
    <Text p="0" m="0" {...rest}>
      {children}
    </Text>
  );
}
