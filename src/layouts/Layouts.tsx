import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import colors from "../components/colors";
import LargeWithAppLinksAndSocial from "../components/Footer";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";
import ProductDetailsCard from "../components/productDetails/ProductDetailsCard";
type LayoutsProps = {
  children: ReactNode;
  isFooter?: boolean;
  title?: string;
  activateModal?: any;
};
export default function Layouts({
  children,
  isFooter = true,
  title = "Welcome to the number one(1) platform to sell used and new goods",
  activateModal,
}: LayoutsProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Box bgColor={colors["primary"]}>
        <NavBar activateModal={activateModal} />
      </Box>
      <Box minHeight={"52vh"}>{children}</Box>

      {isFooter && <LargeWithAppLinksAndSocial />}
    </>
  );
}
