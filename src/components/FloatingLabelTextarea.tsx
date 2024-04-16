import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  extendTheme,
  Box,
  Textarea,
} from "@chakra-ui/react";
import colors from "./colors";
import { useFormikContext } from "formik";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
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
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
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
interface FloatingLabelTextAreaProps {
  label: string;
  name: string;
  rest?: any;
}
export default function FloatingLabelTextArea({
  label,
  rest,
  name,
}: FloatingLabelTextAreaProps) {
  const { touched, errors, setFieldValue } =
    useFormikContext<FloatingLabelTextAreaProps>();
  const isTouched = touched[name as keyof FloatingLabelTextAreaProps];
  const fieldError = errors[name as keyof FloatingLabelTextAreaProps];
  return (
    <ChakraProvider theme={theme}>
      <Box mb={"20px"} mt="20px">
        <FormControl
          variant="floating"
          id="first-name"
          isRequired
          isInvalid={isTouched && !!fieldError}
        >
          <Textarea
            placeholder=" "
            h="55px"
            {...rest}
            color={colors["chakraColorsGray600"]}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFieldValue(name, event?.target?.value)
            }
          />
          {/* It is important that the Label comes after the Control due to css selectors */}
          <FormLabel
            display={"inline-block"}
            color={colors["chakraColorsGray600"]}
          >
            {label}
          </FormLabel>
          {fieldError && (
            <FormErrorMessage fontSize={"12px"} mt="2px">
              {fieldError as any}
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
