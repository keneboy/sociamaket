import { Badge, Button, Flex, HStack, Text } from "@chakra-ui/react";
import formatPrice from "../../Utils/formatPrice";
import React, { useState } from "react";
interface Props {
  promo: string;
  onSetPromo: () => void;
  isDisabled: boolean;
}
export default function PostTopData({ promo, onSetPromo, isDisabled }: Props) {
  const topData = [
    {
      title: "7 days",
      price: 2600,
      id: 1,
    },
    {
      title: "30 days",
      price: 5600,
      id: 2,
    },
  ];
  const [top, setTop] = useState(topData[0]);
  return (
    <Button
      variant={"outline"}
      display="block"
      w="100%"
      minHeight="100px"
      mt="20px"
      onClick={onSetPromo}
      borderColor={promo === "top" ? "green" : "inherit"}
      isDisabled={isDisabled}
    >
      <HStack mb="10px">
        <Text p="0" m="0">
          Top
        </Text>
      </HStack>

      <HStack alignItems={"center"} justifyContent="space-between">
        <Flex gap="20px">
          {topData.map((data) => (
            <Badge
              p="10px"
              borderRadius={"10px"}
              colorScheme={top.id === data.id ? "green" : "gray"}
              onClick={() => setTop(data)}
            >
              {data.title}
            </Badge>
          ))}
        </Flex>
        <Text p="0" m="0">
          {formatPrice(top["price"])}
        </Text>
      </HStack>
    </Button>
  );
}
