import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { LoginButton } from "./auth/LoginButton";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleDelete: () => void;
  label?: string;
}
function DeleteModal({ isOpen, onClose, handleDelete, label }: Props) {
  const { colorMode } = useColorMode();

  //   const OverlayOne = () => (
  //     <ModalOverlay
  //       bg="blackAlpha.300"
  //       backdropFilter="blur(10px) hue-rotate(90deg)"
  //     />
  //   );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const [overlay, setOverlay] = useState(<OverlayTwo />);

  return (
    <>
      {/* <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Use Overlay one
        </Button> */}
      {/* <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Use Overlay two
        </Button> */}
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent px="50px">
          <ModalHeader textAlign={"center"}>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"}>
              {label ??
                "Do you really want to delete all ads from your favorites?"}
            </Text>
            <LoginButton onSetClick={handleDelete}>Yes</LoginButton>
            <LoginButton
              rest={{
                bg: "transparent",
                color: `${colorMode === "dark" ? "#fff" : "#000"}`,
                border: "none",
              }}
              onSetClick={onClose}
            >
              No
            </LoginButton>
          </ModalBody>
          {/* <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
export default DeleteModal;
