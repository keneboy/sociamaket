import {
  Badge,
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import colors from "../colors";
import { FaPlus } from "react-icons/fa";
import { LoginButton } from "../auth/LoginButton";
import FloatLabel from "../auth/FloatLabel";
import MyDropzone from "../ReactDropZone/ImageDropZone";
import { category, newState } from "../../Utils/state";
import InputLabel from "../Setting/InputLabel";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import useProductContext from "../../contextApi/useProductContext";

const validationSchema = Yup.object().shape({
  youtube_video: Yup.string()
    .required("Required")
    .label("youtube_video")
    .matches(
      /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]+(&t=\d+s)?$/,
      "Invalid YouTube URL: Please provide a valid YouTube video URL"
    ),
  photos: Yup.array()
    .min(3, "Please upload at least three photos")
    .required("Please upload at least three photos"),
  category: Yup.object()
    .shape({
      name: Yup.string().required("Category name is required"),
      avatar: Yup.string().required("Category name is required"),
      subCategory: Yup.array(),
      // You can add more validation rules for other properties of the category object if needed
    })
    .required("Category is required"),
  subCategory: Yup.string().required("subCategory is required"),
  state: Yup.object()
    .shape({
      code: Yup.string(),
      name: Yup.string().required("name is required"),
      subCategory: Yup.array(),
    })
    .required("state is required"),
  city: Yup.string().required("city is required"),
});

export default function Category() {
  const { dispatch } = useProductContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      youtube_video: "",
      photos: [],
      category: {
        name: "",
        avatar: "",
        subCategory: [],
      },
      subCategory: "",
      state: {
        code: "",
        name: "",
        subCategory: [],
      },
      city: "",
    },
    validationSchema,
    onSubmit: async (val) => {
      dispatch({ type: "FIRST_STEP", payload: val });
      navigate("/post/properties");
    },
  });

  function isValidYoutubeURL(url: string) {
    const youtubeRegex =
      /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]+(&t=\d+s)?$/;
    return youtubeRegex.test(url);
  }

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Box
          bg={useColorModeValue(`${colors["white"]}`, "gray.900")}
          color={useColorModeValue("#000", "white.100")}
          mt="30px"
          paddingTop="20px"
          pb="40px"
        >
          <Flex as="div" direction={"column"} maxW="50%" mx="auto">
            <FloatLabel
              label="Category"
              data={category}
              isSub={true}
              name="category"
              extraName="subCategory"
            />
            <FloatLabel
              label="Select Location"
              data={newState?.map(({ lgas, ...rest }) => ({
                ...rest,
                subCategory: lgas?.map((y) => ({ name: y })),
              }))}
              isSub={true}
              name="state"
              extraName="city"
            />
            <Text fontWeight={"bold"} p="0" mb="5px">
              Add photo
            </Text>
            <Text color={colors["chakraColorsGray600"]} p="0" m="0">
              Add at least 1 photo for this category
            </Text>
            <Text color={colors["chakraColorsGray500"]} p="0" m="0">
              First picture - is the title picture. You can change the order of
              photos: just grab your photos and drag
            </Text>
            <MyDropzone
              uploadComponent={
                <Badge
                  w="80px"
                  h="80px"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  mt="10px"
                  colorScheme="green"
                >
                  <Icon as={FaPlus} boxSize={"15px"} cursor="pointer" />
                </Badge>
              }
              name="photos"
            />
            {formik?.errors.photos && (
              <p
                style={{
                  fontSize: "12px",
                  padding: "0px",
                  margin: "0px",
                  color: "red",
                }}
              >
                {formik?.errors.photos as any}
              </p>
            )}
            <Text color={colors["chakraColorsGray500"]} p="0" mb="20px">
              Supported formats are .jpg, .gif and .png, 5MB max
            </Text>

            <InputLabel
              label="Link to Youtube Video"
              form_label="youtube_video"
              isPassword={false}
              isVerified={isValidYoutubeURL(formik?.values.youtube_video)}
            />
            <LoginButton type="submit">Next</LoginButton>
          </Flex>
        </Box>
      </Form>
    </FormikProvider>
  );
}
