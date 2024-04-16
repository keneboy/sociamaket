import { Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

const CustomToolTip = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return <Tooltip label={label}>{children}</Tooltip>;
};

export default CustomToolTip;
