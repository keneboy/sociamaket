// import { Grid, GridItem, Show } from "@chakra-ui/react";
// import NavBar from "../components/NavBar";
// import colors from "../components/colors";
// import Sidebar from "../components/Sidebar";
// import Products from "../components/Products";
// import LargeWithAppLinksAndSocial from "../components/Footer";
// import ProductDetailsCard from "../components/ProductDetailsCard";

// export default function ProductDetails() {
//   return (
//     <Grid
//       templateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav" "subnav subnav" "main aside" "footer footer"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "1fr 400px",
//       }}
//     >
//       <GridItem area="nav" bgColor={colors["primary"]}>
//         <NavBar />
//       </GridItem>
//       <GridItem area="main" padding={5}>
//         <ProductDetailsCard />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside" padding={5}></GridItem>
//       </Show>
//       <GridItem area="footer">
//         <LargeWithAppLinksAndSocial />
//       </GridItem>
//     </Grid>
//   );
// }

import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import colors from "../components/colors";
import ProductDetailsCard from "../components/productDetails/ProductDetailsCard";
import Layouts from "../layouts/Layouts";

export default function productDetails() {
  return (
    <Layouts>
      <Box
        padding={5}
        bg={useColorModeValue("gray.100", colors["chakraColorsGray800"])}
      >
        <ProductDetailsCard />
      </Box>
    </Layouts>
  );
}
