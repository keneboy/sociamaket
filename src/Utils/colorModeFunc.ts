import { useColorMode } from "@chakra-ui/react";

const colorModeFunc = (darkVal: string, lightVal: string) => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? darkVal : lightVal;
};
export default colorModeFunc;
