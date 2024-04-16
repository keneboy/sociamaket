import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Icon,
  Text,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";
import ButtonWithLogo from "./ButtonWithLogo";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import colors from "../colors";
import { MouseEvent, useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegistrationForm } from "./RegistrationForm";
import useAuth from "../../hooks/useAuth";
import GoogleAuth from "../GoogleAuth";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  label: string;
};
export const DetermineAuthentication = ({
  label,
  nature,
  option,
  btnLabel,
  onSelectAuth,
}: {
  label: string;
  nature: string;
  option: string;
  btnLabel: string;
  onSelectAuth: (val: string) => void;
}) => {
  function handleTapped(event: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    const target = event.target as HTMLDivElement;
    onSelectAuth(target.dataset["set"] as string);
  }
  return (
    <>
      {" "}
      <ModalOverlay />
      <ModalContent p="20px">
        <ModalHeader>{label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ButtonGroup w="100%" display={"flex"}>
            <GoogleAuth />
            <ButtonWithLogo rest={{ bg: "#3b5998", color: "#fff" }}>
              <HStack gap="20px">
                <Icon as={FaFacebook} />
                <Text>Facebook</Text>
              </HStack>
            </ButtonWithLogo>
          </ButtonGroup>
          <ButtonWithLogo
            rest={{
              bg: `${colors["primary"]}`,
              color: "#fff",
              mt: "15px",
              w: "100%",
            }}
          >
            <HStack align={"center"}>
              <Text
                p="0"
                m="0"
                data-set={btnLabel}
                onClick={(event) => handleTapped(event)}
              >
                {btnLabel}
              </Text>
            </HStack>
          </ButtonWithLogo>
          <Text align={"center"} fontSize="14px" mt="5px">
            {nature}{" "}
            <Button
              variant="link"
              color={colors["primary"]}
              data-set={option}
              onClick={(event) => handleTapped(event)}
            >
              {option}
            </Button>
          </Text>
          <Text fontSize={"10px"} align={"center"}>
            By continuing you agree to the{" "}
            <Text as={"span"}>Policy and Rules</Text>{" "}
          </Text>
        </ModalBody>
      </ModalContent>
    </>
  );
};

function TransitionExample({ isOpen, onClose, label }: Props) {
  const [active, setActive] = useState<string>(label);
  const { auth } = useAuth();
  useEffect(() => {
    if (auth && auth?.success) {
      onClose();
    }
  }, [auth]);

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        {auth && auth?.success ? null : (
          <>
            {active === "Sign in" && (
              <DetermineAuthentication
                label="Sign in"
                btnLabel="E-mail or phone"
                nature="Don't have an account?"
                option="Registration"
                onSelectAuth={(val) => setActive(val)}
              />
            )}

            {active === "Registration" && (
              <DetermineAuthentication
                label="Register"
                btnLabel="Register via E-mail or phone"
                nature="Already have an account?"
                option="Sign in"
                onSelectAuth={(val) => setActive(val)}
              />
            )}

            {active === "E-mail or phone" && (
              <LoginForm
                label="Sign in via email or phone"
                onSelectedAuth={(val) => setActive(val)}
              />
            )}
            {active === "Register via E-mail or phone" && (
              <RegistrationForm onSelectedAuth={(val) => setActive(val)} />
            )}
          </>
        )}
      </Modal>
    </>
  );
}
export default TransitionExample;
