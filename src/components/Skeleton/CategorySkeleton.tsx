import {
  Box,
  Card,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import colors from "../colors";

export default function CategorySkeleton() {
  return (
    <Card>
      {Array.from({ length: 7 }, (v, i) => i).map((x) => (
        <Stack
          padding="6"
          boxShadow="lg"
          bg={useColorModeValue("white", colors["chakraColorsGray600"])}
          flexDirection={"row"}
          gap="10px"
          alignItems={"center"}
          key={x}
        >
          <SkeletonCircle size="10" />
          <Box flex={"1"}>
            <SkeletonText noOfLines={2} spacing="4" skeletonHeight="2" />
          </Box>
        </Stack>
      ))}
    </Card>
  );
}
