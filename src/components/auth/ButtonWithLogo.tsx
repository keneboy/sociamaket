import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
type Props = {
  variant?: string;
  children: ReactNode;
  rest?: any;
  onClick?: () => void;
};
export default function ButtonWithLogo({
  variant = "solid",
  children,
  rest,
  onClick = undefined,
}: Props) {
  return (
    <Button flex={1} variant={variant} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}
