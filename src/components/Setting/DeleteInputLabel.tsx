import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import colors from "../colors";
import { useState } from "react";
import { useCombobox } from "downshift";
import { state } from "../../Utils/state";

import colorModeFunc from "../../Utils/colorModeFunc";
import TextComponent from "../TextComponent";
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

export default function DeleteInputLabel({
  label,
  rest,
  onSelectReason,
}: {
  label: string;
  rest?: any;
  onSelectReason: (val: string) => void;
}) {
  function getBooksFilter(inputValue: string | undefined) {
    const lowerCasedInputValue = inputValue?.toLowerCase();

    return function booksFilter(book: any) {
      return (
        !inputValue || book.name.toLowerCase().includes(lowerCasedInputValue)
        // book.author.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }
  const [items, setItems] = useState(state);
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    onInputValueChange({ inputValue }) {
      setItems(state.filter(getBooksFilter(inputValue)));
      inputValue && onSelectReason(inputValue);
    },
    items,
    itemToString(item) {
      return item ? item.name : "";
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <FormControl variant="floating" isRequired>
          <HStack position={"relative"} as="div" p="0" m="0">
            <Input
              placeholder=" "
              h="55px"
              {...rest}
              color={colorModeFunc(colors["chakraColorsGray600"], "#fff")}
              pr="40px"
              type={"text"}
              {...getInputProps()}
            />

            <FormLabel
              display={"inline-block"}
              color={colorModeFunc(colors["chakraColorsGray600"], "#fff")}
              bg={colorModeFunc("#fff", colors["chakraColorsGray600"])}
            >
              {label}
            </FormLabel>
            <List
              position="absolute"
              top={"100%"}
              left="-8px"
              right="0"
              as="ul"
              visibility={!(isOpen && items.length) && "hidden"}
              overflow="scroll"
              maxH={"400px"}
              border="1px solid #ccc"
              p="0!important"
              m="0"
              bg="#fff"
              zIndex="10"
              {...getMenuProps()}
            >
              {isOpen &&
                items.map((item, index) => (
                  <ListItem
                    key={index}
                    {...getItemProps({ item, index })}
                    p="18px 20px"
                    borderBottom={"1px solid #ccc"}
                    _hover={{ bg: "#EBF2F7" }}
                    // onClick={() => onSelectReason(item.name)}
                  >
                    <TextComponent rest={{ fontSize: "14px" }}>
                      {item.name}
                    </TextComponent>
                  </ListItem>
                ))}
            </List>
          </HStack>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
