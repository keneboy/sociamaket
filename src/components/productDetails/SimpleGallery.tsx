import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import { product } from "../../hooks/useProducts";
import { ButtonVariant } from "./ProductDetailsContact";

type Props = {
  data: product[];
};

export default function SimpleGallery({ data }: Props) {
  console.log(data);
  return (
    <Flex direction={"column"} gap="10px">
      {data?.map((item) => (
        <Card w="full" key={item.id}>
          <HStack gap="20px">
            <Image
              w="200px"
              h="100%"
              objectFit={"cover"}
              src={item.images[0]["image"]}
            />
            <CardBody>
              <HStack justify={"space-between"} mb="10px">
                <Heading as="h2" fontSize={"18px"} p="0" m="0">
                  {item.title}
                </Heading>
                <Text>N {item.price}</Text>
              </HStack>
              <Text noOfLines={1} color="grey" fontSize={"14px"} mb="40px">
                {item.description}
              </Text>
              <HStack mb="30px">
                <ButtonVariant>Nigeria Used</ButtonVariant>
                <ButtonVariant>Automatic</ButtonVariant>
              </HStack>
              <HStack>
                <Icon as={FaLocationArrow} />
                <Text>Lagos, Ijebu</Text>
              </HStack>
            </CardBody>
          </HStack>
        </Card>
      ))}
    </Flex>
  );
}
