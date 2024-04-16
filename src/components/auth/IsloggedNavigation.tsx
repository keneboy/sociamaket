import { FaRegBookmark, FaGem, FaThList, FaBell } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { IconButton, HStack } from "@chakra-ui/react";
import CustomedToolTip from "../CustomedToolTip";
import colors from "../colors";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";
import MenuListComponent from "../MenuListComponent";

export default function IsloggedNavigation() {
  type IconData = {
    icon: JSX.Element;
    label: string;
    path?: string;
  };
  const data: IconData[] = [
    {
      icon: <FaRegBookmark />,
      label: "Saved",
      path: "/profile/saved",
    },
    {
      icon: <BiMessageDetail />,
      label: "My Messages",
      path: "/profile-message",
    },
    {
      icon: <FaBell />,
      label: "Notifications",
      path: "/profile/notification",
    },
    {
      icon: <FaGem />,
      label: "Premium Services",
      path: "/premium-services",
    },
    {
      icon: <FaThList />,
      label: "My Adverts",
      path: "/profile/adverts",
    },
  ];
  return (
    <HStack p="0" m="0" gap="0" spacing="0">
      {data.map((item, index) => (
        <CustomedToolTip label={item.label} key={index}>
          <Link to={item.path ? item.path : ""}>
            <IconButton
              aria-label={item.label}
              icon={item.icon}
              borderRadius="50%"
            ></IconButton>
          </Link>
        </CustomedToolTip>
      ))}
      <MenuListComponent />
    </HStack>
  );
}
