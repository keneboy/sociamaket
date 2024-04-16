import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
} from "@chakra-ui/react";
import colors from "../colors";
import { useForm } from "react-hook-form";
import { useFormikContext } from "formik";
import { useEffect } from "react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

interface FloatingLabelProps {
  label: string;
  name: string;
  rest?: any;
}
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

export default function FloatingLabel({
  label,
  rest,
  name,
}: FloatingLabelProps) {
  const { touched, errors, setFieldValue, values } =
    useFormikContext<FloatingLabelProps>();
  const isTouched = touched[name as keyof FloatingLabelProps];
  const fieldError = errors[name as keyof FloatingLabelProps];

  return (
    <ChakraProvider theme={theme}>
      <Box mb={"20px"}>
        <FormControl
          variant="floating"
          id="first-name"
          isRequired
          isInvalid={isTouched && !!fieldError}
        >
          <Input
            placeholder=" "
            h="55px"
            {...rest}
            color={colors["chakraColorsGray600"]}
            value={values[name as keyof FloatingLabelProps]}
            // {...register(form_label, {
            //   required: "This field is required",
            //   // Add additional validation rules as needed
            // })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFieldValue(name, e.target.value);
            }}
          />
          <FormLabel
            display={"inline-block"}
            color={colors["chakraColorsGray600"]}
          >
            {label}
          </FormLabel>
          {fieldError && (
            <FormErrorMessage>{fieldError as any}</FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
