import { HStack, Image } from "@chakra-ui/react";
import man from "../assets/man.png";
import girls from "../assets/girls.png";
import SearchComponent from "./SearchComponent";

export default function SubNavBar() {
  return (
    <HStack justifyContent="center" paddingTop="50px">
      <Image src={man} />
      <SearchComponent />
      <Image src={girls} />
    </HStack>
  );
}
