import { ReactNode, useState, useRef } from "react";
import useProduct from "../../hooks/useProduct";
import { useParams } from "react-router-dom";

import {
  Flex,
  Heading,
  HStack,
  Image,
  Icon,
  Text,
  Stack,
  useColorModeValue,
  Box,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import ProductThumbnail from "./ProductThumbnail";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaRegClock,
  FaEye,
} from "react-icons/fa";
import CustomedToolTip from "../CustomedToolTip";
import { ButtonVariant } from "./ProductDetailsContact";
import colors from "../colors";
import MasonrySimpleContainer from "./MasonrySimpleContainer";

const TextListItem = ({
  children,
  rest,
}: {
  children: ReactNode;
  rest?: any;
}) => {
  return (
    <Text fontSize={"10px"} textTransform="uppercase" color="grey" {...rest}>
      {children}
    </Text>
  );
};
const TextListItemBold = ({
  children,
  rest,
}: {
  children: ReactNode;
  rest?: any;
}) => {
  return (
    <Text {...rest} fontWeight="bold">
      {children}
    </Text>
  );
};

export default function ProductDetailsGallery() {
  const bookMarkRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const [id, setId] = useState<string | undefined>(params.id);

  const { isLoading, data } = useProduct(id);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  console.log(data, "real data");
  return (
    <Stack flex={1}>
      {/* <Flex direction="column" gap="10px">
        <Image
          src={currentImage ? currentImage : products?.["images"]?.[0]}
          h="500px"
        />
        <ProductThumbnail
          images={products?.images}
          onSelectImage={(image) => setCurrentImage(image)}
        />
      </Flex> */}
      <Flex
        bg={useColorModeValue("#fff", "gray.700")}
        p="20px"
        py="40px"
        direction={"column"}
      >
        <HStack justify={"space-between"} w="100%">
          <Heading as="h3" fontSize={"2xl"} m="0" p="0px">
            {data?.data?.description}
          </Heading>
          <HStack gap="5px">
            <CustomedToolTip label="bookmark">
              <Text as={"span"}>
                <Icon as={FaRegBookmark} p="0" boxSize="16px" />
              </Text>
            </CustomedToolTip>
            <Text>1</Text>
          </HStack>
        </HStack>
        <Flex gap="30px" mt="20px" borderBottom={"1px solid #eee"} pb="30px">
          <HStack>
            <Icon as={FaRegClock} />
            <Text fontSize={"12px"}>Posted 26/05</Text>
          </HStack>
          <HStack>
            <Icon as={FaMapMarkerAlt} />
            <Text fontSize={"12px"}>
              {data?.data.state}, {data?.data.city}
            </Text>
          </HStack>
          <HStack ml="auto">
            <Icon as={FaEye} />
            <Text fontSize={"12px"}>284 views</Text>
          </HStack>
        </Flex>
        <Box
          as="div"
          display={"flex"}
          pt="20px"
          borderBottom={"1px solid #eee"}
          pb="30px"
        >
          <List p="0" flex="1">
            <ListItem>
              <TextListItemBold>No faults, First owner</TextListItemBold>

              <TextListItem>SECOND CONDITION</TextListItem>
            </ListItem>
            <ListItem>
              <TextListItemBold>Highlander</TextListItemBold>

              <TextListItem>MODEL</TextListItem>
            </ListItem>
            <ListItem>
              <TextListItemBold>Blue</TextListItemBold>

              <TextListItem>COLOR</TextListItem>
            </ListItem>
            <ListItem>
              <TextListItemBold>Yes</TextListItemBold>

              <TextListItem>Registered Car</TextListItem>
            </ListItem>
          </List>
          <List flex={1}>
            <ListItem>
              <TextListItemBold>Toyota</TextListItemBold>

              <TextListItem>MAKE</TextListItem>
            </ListItem>
            <ListItem>
              <TextListItemBold>2008</TextListItemBold>
              <TextListItem>YEAR OF MANUFACTURE</TextListItem>
            </ListItem>
            <ListItem>
              <TextListItemBold>Brown</TextListItemBold>
              <TextListItem>INTERIOR COLOR</TextListItem>
            </ListItem>
            <ListItem>
              <TextListItemBold>No</TextListItemBold>
              <TextListItem>EXCHANGE POSSIBLE</TextListItem>
            </ListItem>
          </List>
        </Box>
        <Box as="div" pt="20px" borderBottom={"1px solid #eee"} pb="30px">
          <Text>
            Neatly Used toyota highlander is for sale at distress price,
            Everything is working perfectly, nothing to fix, buy and drive,
            documents are intact, negotiate slightly for fast finger call
            081XXXXXXXX
          </Text>
          <ButtonVariant
            rest={{
              fontSize: "14px",
              mt: "15px",
              bg: "#00b53f",
              color: "#fff",
              px: "60px",
            }}
          >
            Show contact
          </ButtonVariant>
        </Box>
        <Box as="div" pt="20px" borderBottom={"1px solid #eee"} pb="30px">
          <HStack>
            <Badge p="5px" bg="#4267B2">
              <Icon as={FaFacebook} boxSize="5" color="#fff" />
            </Badge>
            <Badge p="5px" bg="red">
              <Icon as={FaEnvelope} boxSize="5" color="#fff" />
            </Badge>
            <Badge p="5px" bg="#00acee">
              <Icon as={FaTwitter} boxSize="5" color="#fff" />
            </Badge>
            <Badge p="5px" bg="#128C7E ">
              <Icon as={FaWhatsapp} boxSize="5" color="#fff" />
            </Badge>
          </HStack>
        </Box>
        <Box>
          <ButtonVariant
            rest={{
              fontSize: "14px",
              mt: "15px",
              px: "60px",
              borderColor: useColorModeValue(`${colors["primary"]}`, "grey"),
            }}
          >
            Make an offer
          </ButtonVariant>
        </Box>
      </Flex>
      <MasonrySimpleContainer />
    </Stack>
  );
}
