import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useProducts, { product } from "../hooks/useProducts";
import GameCardSkeleton from "./GameCardSkeleton";
import { LogoWrapper } from "./NavBar";
import ProductCard from "./ProductCard";

export default function Products() {
  // const { products, isLoading, error } = useProducts();
  const { data, isLoading, isError } = useProducts();

  let num = 10;
  let Skeletons = Array.from({ length: num }, (v, k) => k);
  return (
    <SimpleGrid minChildWidth="200px" spacing={5}>
      {isLoading &&
        Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data &&
        data.data.map((product: product) => (
          <LogoWrapper key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </LogoWrapper>
        ))}
    </SimpleGrid>
  );
}
