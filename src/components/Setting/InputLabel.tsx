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
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import colors from "../colors";
import colorModeFunc from "../../Utils/colorModeFunc";
import { useFormikContext } from "formik";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
// import { FieldError, useFormContext } from "react-hook-form";
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
            // "input:not(:placeholder-shown) ~ label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
            //   {
            //     ...activeLabelStyles,
            //   },
            "input:not(:placeholder-shown) + label,textarea:not(:placeholder-shown) + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: "30%",
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
interface InputFieldProps {
  label: string;
  rest?: any;
  isPassword?: boolean;
  form_label: string;
  isVerified?: boolean;
}

export default function InputLabel({
  label,
  rest,
  isPassword = true,
  isVerified = false,
  form_label,

  ...otherProps
}: InputFieldProps) {
  const [visible, setVisible] = useState(false);
  // handle individual form validation
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext();

  // const fieldError = errors[form_label] as FieldError | undefined;

  const { values, touched, errors, setFieldValue, setFieldTouched } =
    useFormikContext<InputFieldProps>();
  const isTouched = touched[form_label as keyof InputFieldProps];
  const fieldError = errors[form_label as keyof InputFieldProps];
  // const handleBlur = () => {
  //   setFieldTouched(form_label, true);
  // };
  return (
    <ChakraProvider theme={theme}>
      <Box mb={"20px"} w="full">
        <FormControl
          variant="floating"
          id="first-name"
          isInvalid={isTouched && !!fieldError}
        >
          <HStack position="relative" h="100%">
            <InputGroup>
              {isVerified && (
                <InputRightElement
                  pointerEvents="none"
                  children={<IoCheckmarkDoneOutline color="green" />}
                />
              )}

              <Input
                placeholder=" "
                h="55px"
                {...rest}
                color={colorModeFunc(colors["chakraColorsGray600"], "#fff")}
                value={values[form_label as keyof InputFieldProps]}
                // {...register(form_label)}
                // value={values[form_label as keyof InputFieldProps]}

                onChange={(e: any) => {
                  setFieldValue(form_label, e.target.value);
                }}
                // onBlur={otherProps.onBlur && typeof otherProps.onBlur === 'function' ? otherProps.onBlur : undefined}
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

              {/*  */}
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
            </InputGroup>
          </HStack>

          {/* It is important that the Label comes after the Control due to css selectors */}

          {/* <FormHelperText>Keep it very short and sweet!</FormHelperText>
            <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}
          {/* {errors[form_label] && (
            <FormErrorMessage>{errors[form_label].message}</FormErrorMessage>
          )} */}
          {fieldError && (
            <FormErrorMessage fontSize={"12px"} my="0">
              {fieldError as any}
            </FormErrorMessage>
          )}
          {/* <p style={{ color: "red" }}>{fieldError?.message}</p> */}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
