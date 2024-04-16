import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Icon,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import colors from "../colors";
import colorModeFunc from "../../Utils/colorModeFunc";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-10px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) ~ label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              transform: "translateY(10px)",
              left: 0,
              zIndex: 2,
              position: "absolute",
              //   backgroundColor: `${colorModeFunc("#fff", "grey")}`,
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default function TextareaLabel({
  label,
  rest,
}: {
  label: string;
  rest?: any;
}) {
  return (
    <ChakraProvider theme={theme}>
      <Box w="full">
        <FormControl variant="floating" id="first-name" isRequired>
          <HStack position="relative" h="100%">
            <Textarea
              placeholder=" "
              size="sm"
              {...rest}
              color={colorModeFunc(colors["chakraColorsGray600"], "#fff")}
              pr="40px"
            />
            <FormLabel
              display={"inline-block"}
              color={colorModeFunc(colors["chakraColorsGray600"], "#fff")}
              bg={colorModeFunc("#fff", colors["chakraColorsGray600"])}
            >
              {label}
            </FormLabel>
          </HStack>

          {/* It is important that the Label comes after the Control due to css selectors */}

          {/* <FormHelperText>Keep it very short and sweet!</FormHelperText>
              <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
