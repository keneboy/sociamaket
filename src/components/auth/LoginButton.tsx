import { Button, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import colors from "../colors";
import TextComponent from "../TextComponent";

export const LoginButton = ({
  children,
  rest,
  onSetClick,
  type = "button",
  isLoading = false,
  disabled = false,
}: {
  children: ReactNode;
  rest?: any;
  onSetClick?: () => void;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}) => {
  return (
    <Button
      variant={"outline"}
      color={useColorModeValue(`#fff`, "#000")}
      onClick={onSetClick}
      type={type}
      fontSize="15px"
      bg={`${colors["primary"]}`}
      w="full"
      h="50px"
      {...rest}
      _hover={{
        bg: useColorModeValue(
          `${rest?.bg ? rest?.bg : colors["primary"]}`,
          `${rest?.bg ? rest?.bg : colors["primary"]}`
        ),
        color: useColorModeValue("#000", "#000"),
      }}
      isLoading={isLoading}
      loadingText={"Please Wait..."}
      isDisabled={disabled}
    >
      {isLoading ? <TextComponent>Loading....</TextComponent> : children}
    </Button>
  );
};
