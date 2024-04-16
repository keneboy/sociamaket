import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
// export const FlexWrapper = ({
//     children,
//     visibility = "visible",
//   }: {
//     children: ReactNode;
//     visibility?: "hidden" | "visible";
//   }) => {
//     return (
//       <Box flex={1} visibility={visibility}>
//         {children}
//       </Box>
//     );
//   };
//   export const FlexBoxWrapper = ({ children }: { children: ReactNode }) => {
//     return <Flex gap="10px">{children}</Flex>;
//   };
export default function SpecialFlexWrapper({
  children,
  visibility = "visible",
}: {
  children: ReactNode;
  visibility?: "hidden" | "visible";
}) {
  return (
    <Box flex={1} visibility={visibility}>
      {children}
    </Box>
  );
}
