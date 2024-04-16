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
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import colors from "../colors";
import { RefObject, useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { state, local } from "../../Utils/state";
import { IoIosArrowBack } from "react-icons/io";
import { useFormikContext } from "formik";
import { useRef } from "react";
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
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label, input.isSelected ~ label":
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
interface FloatLabelProps {
  name: string;
  label: string;
  extraName?: string;
  rest?: any;
  data?: any;
  isSub?: boolean;
}
export default function FloatLabel({
  name,
  label,
  extraName,
  rest,
  data,
  isSub = false,
}: FloatLabelProps) {
  function getBooksFilter(inputValue: string | undefined) {
    const lowerCasedInputValue = inputValue?.toLowerCase();

    return function booksFilter(book: any) {
      return (
        !inputValue || book.name.toLowerCase().includes(lowerCasedInputValue)
        // book.author.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }

  const { touched, errors, setFieldValue } =
    useFormikContext<FloatLabelProps>();
  const isTouched = touched[name as keyof FloatLabelProps];
  const fieldError = errors[name as keyof FloatLabelProps];

  const [selectedCategories, setSelectedCategories] = useState("");
  const [current, setCurrent] = useState(data);
  const [items, setItems] = useState(current);
  const listRef: RefObject<HTMLUListElement> = useRef(null);

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
      if (isSub && extraName) {
        setFieldValue(extraName, inputValue);
      } else {
        setFieldValue(name, inputValue);
      }
      setItems(current.filter(getBooksFilter(inputValue)));
    },
    items,
    itemToString(item: any) {
      return item ? item?.name : "";
    },
  });
  // useEffect(() => {
  //   console.log(selectedItem?.name);
  // }, [selectedItem]);
  const handleClick = (item: any) => {
    setSelectedCategories(item?.name);
    isSub && setFieldValue(name, item);

    // console.log(item?.name);
  };
  useEffect(() => {
    if (selectedCategories) {
      // window.scroll({
      //   top: 0,
      //   left: 0,
      //   behavior: "smooth",
      // });
      // if (listRef.current) {
      //   listRef.current.scrollTop = 0;
      // }
      if (listRef.current) {
        listRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      const filtered = data?.find((x: any) => x?.name === selectedCategories);
      setCurrent(filtered["subCategory"]);
      setItems(filtered["subCategory"]);
    }
  }, [selectedCategories]);

  //
  const redirectToCategories = () => {
    setCurrent(data);
    setItems(data);
    setSelectedCategories("");
  };
  return (
    <ChakraProvider theme={theme}>
      <Box mb={"20px"} position={"relative"}>
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
            {...getInputProps()}
            className={selectedCategories ? "isSelected" : ""}
          />
          {/* It is important that the Label comes after the Control due to css selectors */}
          <FormLabel
            display={"inline-block"}
            color={colors["chakraColorsGray600"]}
            {...getLabelProps()}
          >
            {label}
          </FormLabel>
          {/* <FormHelperText>Keep it very short and sweet!</FormHelperText>
            <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}
        </FormControl>
        <List
          ref={listRef}
          visibility={!(isOpen && items.length) && "hidden"}
          overflow="scroll"
          maxH={"430px"}
          border="1px solid #ccc"
          position={"absolute"}
          width={"100%"}
          top={"90%"}
          bg={useColorModeValue("white", colors["chakraColorsGray600"])}
          zIndex={10}
          p="0"
          {...getMenuProps()}
        >
          {isOpen && selectedCategories && (
            <ListItem
              cursor={"pointer"}
              p="5px 20px"
              borderBottom={"1px solid #ccc"}
              bg="grey"
              display={"flex"}
              alignItems={"center"}
              gap="10px"
              onClick={redirectToCategories}
            >
              <Icon as={IoIosArrowBack} />
              <span>{selectedCategories}</span>
            </ListItem>
          )}
          {isOpen &&
            items.map((item: any, index: number) => (
              <ListItem
                key={index}
                _hover={{
                  bgColor: "rgba(0, 0, 0, 0.2)",
                }}
                cursor={"pointer"}
                {...(isSub && selectedCategories
                  ? getItemProps({ item, index })
                  : isSub
                  ? { onClick: () => handleClick(item) }
                  : getItemProps({ item, index }))}
                p="30px 20px"
                borderBottom={"1px solid #ccc"}
              >
                <span>{item.name}</span>
              </ListItem>
            ))}
        </List>
      </Box>
    </ChakraProvider>
  );
}
