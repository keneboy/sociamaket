import { Icon, List, ListItem } from "@chakra-ui/react";

import colors from "../colors";

import { FaTimes } from "react-icons/fa";
import { ReactNode } from "react";

const ListItemWrap = ({
  children,
  rest,
}: {
  children: ReactNode;
  rest?: any;
}) => {
  return (
    <ListItem
      p="10px"
      fontSize={"12px"}
      borderBottom="1px dotted #ccc"
      textAlign={"center"}
      fontWeight="bold"
      color={colors["primary"]}
      {...rest}
    >
      {children}
    </ListItem>
  );
};
const ListItemWrapTimes = ({
  children,
  isTimes = true,
  rest,
}: {
  children: ReactNode;
  isTimes?: boolean;
  rest?: any;
}) => {
  return (
    <ListItem
      p="10px"
      borderBottom="1px dotted #ccc"
      fontSize={"12px"}
      textAlign={"center"}
      color={isTimes ? colors["chakraColorsGray300"] : colors["primary"]}
      {...rest}
    >
      {children}
    </ListItem>
  );
};

export default function RealList() {
  return (
    <List listStyleType={"none"} p="0">
      <ListItemWrap>Limited Ads views</ListItemWrap>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrap>See full list</ListItemWrap>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
      <ListItemWrapTimes rest={{ borderBottom: "none" }}>
        <Icon as={FaTimes} />
      </ListItemWrapTimes>
    </List>
  );
}
