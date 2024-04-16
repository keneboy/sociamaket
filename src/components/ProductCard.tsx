import {
  Badge,
  Card,
  CardBody,
  Image,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { product } from "../hooks/useProducts";
import colors from "./colors";
import formatPrice from "../Utils/formatPrice";
import { useContext } from "react";
import { SavedContext } from "../contextApi/SavedContext";
import { RedirectContext } from "../contextApi/RedirectContext";
import { AuthContext } from "../contextApi/AuthProvider";

// Inside your component

import { FaRegBookmark, FaGem, FaThList, FaBell } from "react-icons/fa";
import { MouseEvent } from "react";
type productsProps = {
  product: product;
};
export default function ProductCard({ product }: productsProps) {
  const { setActivate } = useContext(RedirectContext);
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(SavedContext);
  function handleAddToBookmark(event: MouseEvent) {
    event.preventDefault();
    if (auth?.success === true && auth?.token !== "") {
      alert("added to bookmark");
      // return;
    } else {
      setActivate({ type: "login", activate: true });
    }
    // dispatch({ type: "ADD_REMOVE_PRODUCT", payload: product });
  }
  return (
    <Card position={"relative"}>
      <Image
        src={product?.images[0]["image"] as any}
        w={"full"}
        h="140px"
        objectFit={"cover"}
      />
      <Badge
        w="40px"
        h="40px"
        borderRadius={"50px"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        position={"absolute"}
        top="52%"
        right="10px"
        zIndex={"10"}
        bg={useColorModeValue("white", colors["chakraColorsGray600"])}
        boxShadow="0 1px 2px rgba(96,125,135,.15)"
        transition="box-shadow 0.3s ease-in-out"
        _hover={{
          boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.2)",
        }}
        onClick={(event) => handleAddToBookmark(event)}
      >
        <Icon as={FaRegBookmark} color={colors["primary"]} fontSize="16px" />
      </Badge>
      <CardBody>
        <Text noOfLines={1} p="0" m="0">
          {product.description}
        </Text>
        <Text color={colors["primary"]} fontSize="14px" p="0" m="0">
          {formatPrice(product.price)}
        </Text>
      </CardBody>
    </Card>
  );
}
