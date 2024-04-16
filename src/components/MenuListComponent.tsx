import React, { useRef, useState } from "react";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { FaGem } from "react-icons/fa";
import { IconType } from "react-icons";
import useAuth from "../hooks/useAuth";
import { AuthProps } from "../contextApi/AuthProvider";
import { useNavigate } from "react-router-dom";

const MenuListComponent: React.FC = () => {
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { setAuth } = useAuth();

  const btnMouseEnterEvent = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsOpenMenu(true);
  };

  const btnMouseLeaveEvent = () => {
    timerRef.current = setTimeout(() => {
      setIsOpenMenu(false);
    }, 150);
  };

  const menuListMouseEnterEvent = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsOpenMenu(true);
  };

  const menuListMouseLeaveEvent = () => {
    timerRef.current = setTimeout(() => {
      setIsOpenMenu(false);
    }, 150);
  };
  // handle the dropdown items
  type dropdownProps = {
    label: string;
    divider?: boolean;
    icon?: IconType;
    path: string;
  };
  const dropdown: dropdownProps[] = [
    {
      label: "my Shop",
      icon: FaGem,
      divider: false,
      path: "a",
    },
    {
      label: "Feedback",
      icon: FaGem,
      divider: false,
      path: "a",
    },
    {
      label: "Performance",
      icon: FaGem,
      divider: false,
      path: "a",
    },
    {
      label: "My balance",
      divider: true,
      icon: FaGem,
      path: "/profile/my-balance/current",
    },
    {
      label: "Setting",
      icon: FaGem,
      divider: false,
      path: "/profile/settings/contact-details",
    },
    {
      label: "logout",
      icon: FaGem,
      divider: false,
      path: "#",
    },
  ];
  // handle the logout
  function handleLogout(a: string) {
    if (a === "logout") {
      setAuth({} as AuthProps);
      navigate("/");
    }
  }
  return (
    <Menu isOpen={isOpenMenu}>
      <Link to="/profile">
        <MenuButton
          onMouseEnter={btnMouseEnterEvent}
          onMouseLeave={btnMouseLeaveEvent}
          pl="40px"
        >
          <IconButton
            aria-label={"My profile"}
            icon={<RxPerson />}
            fontSize="3xl"
            borderRadius="50%"
            size="lg"
            bg="green.100"
            color="green.400"
          ></IconButton>
        </MenuButton>
      </Link>

      <MenuList
        onMouseEnter={menuListMouseEnterEvent}
        onMouseLeave={menuListMouseLeaveEvent}
      >
        {dropdown.map((item, index) => (
          <MenuItem key={index} borderY={item.divider ? "1px solid #eee" : ""}>
            {" "}
            <Link to={item.path}>
              <HStack onClick={() => handleLogout(item?.label)}>
                {item?.icon && item.divider ? (
                  <Icon as={item.icon} />
                ) : (
                  <Icon as={item.icon} visibility="hidden" />
                )}
                <Text as={"span"} whiteSpace="nowrap">
                  {" "}
                  {item.label}
                </Text>
              </HStack>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuListComponent;
