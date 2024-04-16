import { Flex } from "@chakra-ui/react";
import ProductDetailsContact from "./ProductDetailsContact";
import ProductDetailsGallery from "./ProductDetailsGallery";

export default function ProductDetailsCard() {
  return (
    <Flex
      direction="row"
      maxW="1200px"
      m="0 auto"
      gap="20px"
      align={"flex-start"}
    >
      <ProductDetailsGallery />
      <ProductDetailsContact />
    </Flex>
  );
}
