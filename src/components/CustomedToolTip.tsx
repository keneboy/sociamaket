import { Box, Tag, TagProps, Tooltip } from "@chakra-ui/react";
import React, { ReactNode } from "react";
type CustomCardProps = {
  children: ReactNode;
  label: string;
} & TagProps;
const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ children, label, ...rest }, ref) => (
    <Box>
      <Tag bg="transparent" ref={ref} {...rest}>
        <Tooltip label={label}>{children}</Tooltip>
      </Tag>
    </Box>
  )
);

export default CustomCard;
