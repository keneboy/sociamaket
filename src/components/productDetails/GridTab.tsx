import { Box, Flex, HStack, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { FaTh, FaThList } from "react-icons/fa";
type Props = {
  onSelectTab: (id: number) => void;
  active: number;
};

export default function GridTab({ onSelectTab, active }: Props) {
  const iconData = [
    {
      id: 1,
      icon: FaTh,
    },
    {
      id: 2,
      icon: FaThList,
    },
  ];
  return (
    <Box pt="40px" as="div" pb="10px">
      <Flex w="100%" align={"center"} justify={"space-between"}>
        <Text p="0" m="0">
          Similar Advert
        </Text>
        <HStack>
          {iconData.map((data) => (
            <Icon
              as={data.icon}
              key={data.id}
              onClick={() => onSelectTab(data?.id)}
              color={active === data.id ? "green" : ""}
              cursor="pointer"
            />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
