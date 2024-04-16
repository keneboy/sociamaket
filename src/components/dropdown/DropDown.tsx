import React, { ReactNode, useState, useEffect, useRef } from "react";
import { Box, Flex, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onToggle();
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown component
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isOpen) {
          onToggle();
        }
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <Box position="relative" ref={dropdownRef}>
      <Flex
        align="center"
        justify="space-between"
        p={2}
        bg="gray.200"
        borderRadius="md"
        cursor="pointer"
        onClick={onToggle}
      >
        <Text>{selectedOption || "Select an option"}</Text>
        {isOpen ? (
          <IconButton
            icon={<BsChevronUp />}
            aria-label="Close dropdown"
            variant="ghost"
          />
        ) : (
          <IconButton
            icon={<BsChevronDown />}
            aria-label="Open dropdown"
            variant="ghost"
          />
        )}
      </Flex>
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          mt={2}
          py={2}
          zIndex={1}
        >
          <OptionItem onClick={() => handleOptionClick("Option 1")}>
            Option 1
          </OptionItem>
          <OptionItem onClick={() => handleOptionClick("Option 2")}>
            Option 2
          </OptionItem>
          <OptionItem onClick={() => handleOptionClick("Option 3")}>
            Option 3
          </OptionItem>
        </Box>
      )}
    </Box>
  );
};

const OptionItem = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <Box
      px={4}
      py={2}
      cursor="pointer"
      _hover={{ bg: "gray.100" }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Dropdown;
