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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import colors from "../colors";
import colorModeFunc from "../../Utils/colorModeFunc";
import { FieldError, useFormContext } from "react-hook-form";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-44px)",
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
              top: "50%",
              transform: "translateY(-50%)",
              left: 0,
              zIndex: 2,
              position: "absolute",

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
interface inputFieldProps {
  label: string;
  rest?: any;
  isPassword?: boolean;
  form_label: string;
}

export default function InputLabel({
  label,
  rest,
  isPassword = true,
  form_label,
}: inputFieldProps) {
  const [visible, setVisible] = useState(false);
  // handle individual form validation
  const {
    register,
    formState: { errors },
  } = useFormContext();
  // const fieldError: FieldError | undefined = errors[form_label];
  const fieldError = errors[form_label] as FieldError | undefined;

  return (
    <ChakraProvider theme={theme}>
      <Box mb={"20px"} w="full">
        <FormControl
          variant="floating"
          id="first-name"
          isInvalid={!!errors[form_label]}
        >
          <HStack position="relative" h="100%">
            <Input
              placeholder=" "
              h="55px"
              {...rest}
              color={colorModeFunc(colors["chakraColorsGray600"], "#fff")}
              {...register(form_label)}
              pr="40px"
              id={form_label}
              type={
                isPassword === false
                  ? "text"
                  : isPassword && visible
                  ? "text"
                  : "password"
              }
            />
            {isPassword && (
              <Box
                position="absolute"
                top="50%"
                right="20px"
                transform="translateY(-50%)"
                onClick={() => setVisible((prev) => !prev)}
                zIndex="10"
                cursor={"pointer"}
              >
                {visible ? (
                  <Icon as={AiOutlineEye} />
                ) : (
                  <Icon as={AiOutlineEyeInvisible} />
                )}
              </Box>
            )}

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
          {/* {errors[form_label] && (
              <FormErrorMessage>{errors[form_label].message}</FormErrorMessage>
            )} */}
          {fieldError && (
            <FormErrorMessage fontSize={"12px"} my="0">
              {fieldError.message}
            </FormErrorMessage>
          )}

          {/* <p style={{ color: "red" }}>{fieldError?.message}</p> */}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
