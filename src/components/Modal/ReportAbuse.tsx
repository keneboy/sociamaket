import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { ButtonVariant } from "./../productDetails/ProductDetailsContact";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleDelete: () => void;
  label?: string;
}
function ReportAbuse({ isOpen, onClose, handleDelete, label }: Props) {
  const report = [
    {
      title: "This is illegal/fradulent",
    },
    {
      title: "This ad is spam",
    },
    {
      title: "The price is wrong",
    },
    {
      title: "wrong category",
    },
    {
      title: "Seller asked for prepayment",
    },
    {
      title: "It is sold already",
    },
    {
      title: "User is unreachable",
    },
    {
      title: "User is abusive",
    },
    {
      title: "Other",
    },
  ];
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="14px" fontWeight="bold" align={"center"}>
              Report for UK FOREIGN USED CLEAN Ps3 and Ps 4 Console Available
            </Text>
            <FormControl mb="4">
              <FormLabel>Report reason</FormLabel>
              <Select>
                {report.map((item, index) => (
                  <option key={index} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Describe the issue</FormLabel>
              <Textarea
                placeholder="please describe the issue you are reporting"
                size="md"
                resize="vertical"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <ButtonVariant
              rest={{
                fontSize: "14px",
                mt: "15px",
                bg: "#00b53f",
                color: "#fff",
                w: "100%",
              }}
            >
              Send Report
            </ButtonVariant>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ReportAbuse;
