import { Flex, FormControl, RadioGroup, Radio } from "@chakra-ui/react";
import { FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useFormikContext } from "formik";

interface Option {
  id: number;
  value: string;
  label: string;
}

interface RadioComponentProps {
  data: Option[];
  name: string;
  label?: string;
  defaultValue?: string;
  direction?: "column" | "row";
}

const RadioComponent = ({
  data,
  name,
  label,
  defaultValue = "",
  direction = "column",
}: RadioComponentProps) => {
  const { touched, errors, setFieldValue } =
    useFormikContext<RadioComponentProps>();
  const isTouched = touched[name as keyof RadioComponentProps];
  const fieldError = errors[name as keyof RadioComponentProps];

  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <FormControl isInvalid={isTouched && !!fieldError}>
      <FormLabel className={"asterisk"}>{label}</FormLabel>

      <RadioGroup onChange={handleChange} defaultValue={defaultValue}>
        <Flex flexDir={direction} gap={"1em"}>
          {data.map((option) => (
            <Radio key={option.id} colorScheme={"green"} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Flex>
      </RadioGroup>

      {fieldError && (
        <FormErrorMessage fontSize={"12px"} mt="2px">
          {fieldError as any}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default RadioComponent;
