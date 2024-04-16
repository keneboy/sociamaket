import {
  Heading,
  HStack,
  Image,
  Text,
  Link,
  Box,
  Button,
  Divider,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState, useContext } from "react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import colors from "./colors";
import { Link as ReachLink, useNavigate, useLocation } from "react-router-dom";
import TransitionExample from "./auth/Modal";
import IsloggedNavigation from "./auth/IsloggedNavigation";
import useAuth from "../hooks/useAuth";
import { RedirectContext } from "../contextApi/RedirectContext";

export const LogoWrapper = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return <ReachLink to={href}>{children}</ReachLink>;
};
interface NavBarProps {
  activateModal?: any;
}
export default function NavBar({ activateModal }: NavBarProps) {
  const { activate } = useContext(RedirectContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogged, setLogged] = useState(true);
  const { auth } = useAuth();
  const {
    isOpen: newIsopen,
    onOpen: newOnOpen,
    onClose: newOnClose,
  } = useDisclosure();
  const {
    isOpen: sellerIsOpen,
    onOpen: sellerOnOpen,
    onClose: sellerOnClose,
  } = useDisclosure();
  // reirect to post page if neccessary
  function redirectToPostPage() {
    navigate("/post/category");
  }
  useEffect(() => {
    if (activate && activate?.type === "login" && activate?.activate) {
      onOpen();
    }
  }, [activate]);
  return (
    <HStack justifyContent="space-between" padding="10px">
      <TransitionExample isOpen={isOpen} onClose={onClose} label="Sign in" />
      <TransitionExample
        isOpen={newIsopen}
        onClose={newOnClose}
        label="Registration"
      />
      <TransitionExample
        isOpen={sellerIsOpen}
        onClose={sellerOnClose}
        label="Sign in"
      />
      <LogoWrapper href="/">
        <Image src={logo} boxSize="60px" />
      </LogoWrapper>

      <Heading
        fontSize="16px"
        opacity={0.5}
        colorScheme={colors["white"]}
        onClick={() => {
          navigate(`${location.pathname}?search=hello_world`);
        }}
      >
        SELL FASTER, BUY SMARTER
      </Heading>
      <HStack>
        {auth && auth?.success ? (
          <IsloggedNavigation />
        ) : (
          <>
            <Link onClick={onOpen}>Sign in</Link>
            <Center height="14px">
              <Divider orientation="vertical" />
            </Center>
            <Link onClick={newOnOpen}>Registration</Link>
          </>
        )}
        <Box style={{ margin: "0 20px" }}>
          <Button
            variant="solid"
            bg={colors["buttonColor"]}
            paddingX="40px"
            colorScheme={"blackAlpha"}
            onClick={auth && auth?.success ? redirectToPostPage : sellerOnOpen}
          >
            SELL
          </Button>
        </Box>

        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
}
