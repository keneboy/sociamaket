import {
  Card,
  HStack,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import useCategories from "../hooks/useCategories";
import CategorySkeleton from "./Skeleton/CategorySkeleton";

export default function Sidebar() {
  const { data, isLoading = true } = useCategories();
  return (
    <>
      {isLoading ? (
        <>
          <CategorySkeleton />
        </>
      ) : (
        <Card>
          <List>
            {data?.data.map((category) => (
              <ListItem key={category.id} paddingY="10px">
                <HStack>
                  <Image src={category?.avatar} boxSize="40px" />
                  <HStack
                    flexDirection={"column"}
                    alignItems="flex-start"
                    gap="4px"
                  >
                    <Text fontSize="14px" margin="0px">
                      {category.name}
                    </Text>
                    <Text opacity=".5" fontSize="12px">
                      217, 261 ads
                    </Text>
                  </HStack>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Card>
      )}
    </>
  );
}
