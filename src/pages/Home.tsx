import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import colors from "../components/colors";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import LargeWithAppLinksAndSocial from "../components/Footer";

export default function Home() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "subnav subnav" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "400px 1fr",
      }}
    >
      <GridItem area="nav" bgColor={colors["primary"]}>
        <NavBar />
      </GridItem>
      <GridItem area="subnav" bg={colors["primaryColor"]}>
        <SubNavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main" padding={5}>
        <Products />
      </GridItem>
      <GridItem area="footer">
        <LargeWithAppLinksAndSocial />
      </GridItem>
    </Grid>
  );
}
