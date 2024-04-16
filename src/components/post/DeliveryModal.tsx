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
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FaTruckMoving } from "react-icons/fa";
import FloatingLabel from "../auth/FloatingLabel";
import SpecialFlexWrapper from "./specialFlexWrapper";
import colors from "../colors";
import { LoginButton } from "../auth/LoginButton";
type Props = {
  isOpen: boolean;
  onClose: () => void;
};
function DeliveryModal({ isOpen, onClose }: Props) {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent maxWidth={"560px"} p={"40px"} borderRadius="20px">
          <ModalHeader>
            {" "}
            <HStack>
              <Icon as={FaTruckMoving} />
              <Text color={colors["chakraColorsGray600"]} fontSize="20px">
                Add delivery option
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FloatingLabel
              label="Name this delivery"
              form_label="name_delivery"
            />
            <FloatingLabel label="Region" form_label="region" />
            <Stack>
              <Text>How many days it takes to deliver?</Text>
              <Flex gap="10px">
                <SpecialFlexWrapper>
                  <FloatingLabel label="From" form_label="form" />
                </SpecialFlexWrapper>
                <SpecialFlexWrapper>
                  <FloatingLabel label="To" form_label="to" />
                </SpecialFlexWrapper>
              </Flex>
            </Stack>
            <FloatingLabel
              label="Do you charge Fee for delivery?"
              form_label="charge_fee"
            />
            <LoginButton
              onSetClick={() => {
                alert("delivery option saved");
              }}
              rest={{ mt: "20px", bg: "grey" }}
            >
              Save
            </LoginButton>
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent="center">
            <Button
              variant={"link"}
              colorScheme="red"
              onClick={onClose}
              fontSize="14px"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default DeliveryModal;
