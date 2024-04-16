import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  Icon,
  useColorModeValue,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

import colors from "../colors";
import FloatingLabel from "../auth/FloatingLabel";
import { FaPlus, FaSadCry, FaTruckMoving } from "react-icons/fa";

import { LoginButton } from "../auth/LoginButton";

import FloatingLabelTextArea from "../FloatingLabelTextarea";
import PostTopData from "../post/PostTopData";
import DeliveryModal from "../post/DeliveryModal";
import FloatLabel from "../auth/FloatLabel";
import { brand, condition, type as newType } from "../../Utils/complexForm";

import useGetMe from "../../hooks/useGetMe";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import RadioComponent from "../auth/RadioComponent";
import useCreateProduct from "../../hooks/useCreateProduct";
import useProductContext from "../../contextApi/useProductContext";

export const FlexWrapper = ({
  children,
  visibility = "visible",
}: {
  children: ReactNode;
  visibility?: "hidden" | "visible";
}) => {
  return (
    <Box flex={1} visibility={visibility}>
      {children}
    </Box>
  );
};
export const FlexBoxWrapper = ({ children }: { children: ReactNode }) => {
  return <Flex gap="10px">{children}</Flex>;
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("title is required"),
  brand: Yup.string().required("brand is required"),
  type: Yup.string().required("type is required"),
  condition_state: Yup.string().required("condition is required"),
  description: Yup.string().required(" description is required"),
  isNegotiable: Yup.string().required("select one of the options listed"),
  phone_number: Yup.string().required("phone number is required"),
  name: Yup.string().required("name is required"),
  price: Yup.string().required("price is required"),
});

export default function Properties() {
  const { state } = useProductContext();
  const { mutate, isLoading } = useCreateProduct({
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const navigate = useNavigate();
  const { type } = useParams();
  const { data } = useGetMe();
  // handle the various promo type
  const [promo, setPromo] = useState("standard");
  // handle the delivery
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (data) {
      formik.setValues({
        name: `${data?.data?.first_name} ${data?.data?.last_name}` || "",
        phone_number: data?.data?.phone_no || "",
        title: "",
        type: "",
        brand: "",
        condition_state: "",
        description: "",
        isNegotiable: "",
        price: "",
      });
    }
  }, [data]);

  const formik = useFormik({
    initialValues: {
      title: "",
      type: "",
      brand: "",
      condition_state: "",
      description: "",
      isNegotiable: "",
      phone_number: "",
      name: "",
      price: "",
    },
    validationSchema,
    onSubmit: async (val) => {
      const obj = {
        ...state?.first_step,
        category: state?.first_step.category["name"],
        state: state?.first_step.state["name"],
        ...val,
      };
      console.log(obj, "what is the obje");
      const formData = new FormData() as any;

      for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
          // If the field is an array, loop through it and append each item
          value.forEach((item, index) => {
            formData.append(`${key}`, item);
          });
        } else {
          // If it's not an array, append it normally
          formData.append(key, value);
        }
        // formData.append(key, value);
      }

      mutate(formData);
    },
  });
  useEffect(() => {
    console.log(state?.first_step, "first__steps");
  }, [state?.first_step]);
  return (
    <>
      <FormikProvider value={formik}>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <DeliveryModal isOpen={isOpen} onClose={onClose} />
          <Box
            mt="30px"
            paddingTop="20px"
            p="20px"
            bg={useColorModeValue(`${colors["white"]}`, "gray.900")}
            color={useColorModeValue("#000", "white.100")}
          >
            {/* {complexForm.products[
        "Accessories and Supplies for Electronics"
      ].form.map((x, index) => {
        if (Array.isArray(x.label)) {
          return (
            <FlexBoxWrapper>
              {x.label?.map((y) => {
                if (y.arr && y.arr?.length > 0) {
                  return (
                    <FlexWrapper>
                      <FloatLabel
                        key={index}
                        label={y.label}
                        data={y.arr}
                      />
                    </FlexWrapper>
                  );
                }
                return (
                  <FlexWrapper>
                    <FloatingLabel
                      label={y.label}
                      form_label={y.label}
                    />
                  </FlexWrapper>
                );
              })}
            </FlexBoxWrapper>
          );
        } else if (x.isStandALong) {
          return (
            <FloatingLabelTextArea
              label={x.label}
              rest={{ height: "160px" }}
            />
          );
        } else if (x.arr && x.arr.length > 0) {
          return (
            <FlexBoxWrapper>
              <FlexWrapper>
                <FloatLabel
                  key={index}
                  label={x.label}
                  data={x.arr}
                />
              </FlexWrapper>
              <FlexWrapper visibility="hidden">
                <FloatingLabel label="Title" form_label="title" />
              </FlexWrapper>
            </FlexBoxWrapper>
          );
        }
        return (
          <FlexBoxWrapper>
            <FlexWrapper>
              <FloatingLabel
                label={x.label}
                form_label={x.label}
              />
            </FlexWrapper>
            <FlexWrapper visibility="hidden">
              <FloatingLabel label="Title" form_label="title" />
            </FlexWrapper>
          </FlexBoxWrapper>
        );
      })} */}
            <FlexBoxWrapper>
              <FlexWrapper>
                <FloatingLabel label="Title" name="title" />
              </FlexWrapper>
              <FlexWrapper visibility="hidden">
                <FloatingLabel label="" name="" />
              </FlexWrapper>
            </FlexBoxWrapper>

            <FlexBoxWrapper>
              <FlexWrapper>
                <FloatLabel label="Brand" data={brand} name="brand" />
              </FlexWrapper>
              <FlexWrapper>
                <FloatLabel label="Type" data={newType} name="type" />
              </FlexWrapper>
            </FlexBoxWrapper>

            <FlexBoxWrapper>
              <FlexWrapper>
                <FloatLabel
                  label="Condition"
                  data={condition}
                  name="condition_state"
                />
              </FlexWrapper>
            </FlexBoxWrapper>

            {/* <Box>
        <Text>Warranty</Text>
        <Checkbox size="md" colorScheme="green">
          Yes
        </Checkbox>
      </Box> */}
            <FloatingLabelTextArea
              label={"Description"}
              rest={{ height: "160px" }}
              name="description"
            />
            <FlexBoxWrapper>
              <FlexWrapper>
                <FloatingLabel label="Price" name="price" />
              </FlexWrapper>
              <FlexWrapper>
                <FloatingLabel label="Add bulk Price" name="bulk_price" />
              </FlexWrapper>
            </FlexBoxWrapper>
            <Stack mb={10}>
              <Text margin={0} p={0}>
                Are you open to negotiation
              </Text>
              <RadioComponent
                name="isNegotiable"
                data={[
                  {
                    id: 1,
                    label: "Yes",
                    value: "Yes",
                  },
                  {
                    id: 2,
                    label: "No",
                    value: "No",
                  },
                  {
                    id: 3,
                    label: "Not sure",
                    value: "Not sure",
                  },
                ]}
                direction="row"
              />
            </Stack>

            <FlexBoxWrapper>
              <FlexWrapper>
                <FloatingLabel label="Your Phone Number" name="phone_number" />
              </FlexWrapper>
              <FlexWrapper>
                <FloatingLabel label="Name" name="name" />
              </FlexWrapper>
            </FlexBoxWrapper>
          </Box>
          <Box
            bg={useColorModeValue(`${colors["white"]}`, "gray.900")}
            color={useColorModeValue("#000", "white.100")}
            mt="10px"
            padding="20px 20px 50px 20px"
          >
            <Container maxW={"400px"}>
              <HStack>
                <Icon as={FaTruckMoving} />
                <Text as="span">Vehicle</Text>
              </HStack>
              <Badge
                colorScheme={useColorModeValue(
                  `${colors["white"]}`,
                  "gray.900"
                )}
                w="100%"
                height="70px"
                border="1px solid #ccc"
                display={"flex"}
                alignItems="center"
                p="20px"
                mt="10px"
                borderRadius={"10px"}
                gap="20px"
              >
                <Badge
                  colorScheme="green"
                  padding="10px 15px"
                  borderRadius={"5px"}
                  cursor="pointer"
                  onClick={onOpen}
                >
                  <Icon as={FaPlus} />
                </Badge>
                <Text p="0" m="0">
                  Add Delivery Options
                </Text>
              </Badge>
              <LoginButton
                onSetClick={() => {
                  alert("delivery option clicked...");
                }}
                rest={{ mt: "20px" }}
              >
                Select 0 options
              </LoginButton>
              <HStack justifyContent={"center"} mt="30px">
                <Button variant={"link"} color="red" fontSize={"13px"}>
                  Cancel
                </Button>
              </HStack>
            </Container>
          </Box>
          <Box
            bg={useColorModeValue(`${colors["white"]}`, "gray.900")}
            color={useColorModeValue("#000", "white.100")}
            mt="10px"
            padding="20px 20px 50px 20px"
          >
            <Container maxW={"400px"}>
              <Heading as="h2" fontSize={"22px"}>
                Promote your ad
              </Heading>
              <Text as="span" fontSize={"14px"}>
                Please, choose one of the following options to post your ad
              </Text>
              <Button
                variant={"outline"}
                display="block"
                w="100%"
                minHeight="60px"
                mt="20px"
                onClick={() => setPromo("standard")}
                borderColor={promo === "standard" ? "green" : "inherit"}
              >
                <HStack alignItems={"center"} justifyContent="space-between">
                  <Text p="0" m="0">
                    Standard ad
                  </Text>
                  <Text color={colors["chakraColorsGray300"]} p="0" m="0">
                    Free
                  </Text>
                </HStack>
              </Button>
              <PostTopData
                promo={promo}
                onSetPromo={() => setPromo("top")}
                isDisabled={true}
              />
              <Button
                variant={"outline"}
                display="block"
                w="100%"
                minHeight="100px"
                mt="20px"
                onClick={() => setPromo("premium")}
                borderColor={promo === "premium" ? "green" : "inherit"}
                isDisabled={true}
              >
                <HStack mb="10px">
                  <Text p="0" m="0">
                    Boost Premium
                  </Text>
                </HStack>

                <HStack alignItems={"center"} justifyContent="space-between">
                  <Flex gap="20px">
                    <Badge p="10px" borderRadius={"10px"} colorScheme="green">
                      1 months
                    </Badge>
                  </Flex>
                  <Text p="0" m="0">
                    ₦ 18,899
                  </Text>
                </HStack>
              </Button>
              <LoginButton
                rest={{ mt: "20px" }}
                type="submit"
                isLoading={isLoading}
              >
                Post ad
              </LoginButton>
              <Text fontSize={"11px"} mt="10px">
                By clicking on Post Ad, you accept the{" "}
                <Button variant="link" color={"green"} fontSize={"11px"}>
                  Terms of Use{" "}
                </Button>
                , confirm that you will abide by the Safety Tips, and declare
                that this posting does not include any Prohibited Items.
              </Text>
            </Container>
          </Box>
        </Form>
      </FormikProvider>
    </>
  );
}
