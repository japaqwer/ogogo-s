import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { productTest } from "./_data";
import { ProductGrid } from "./ProductGrid";


export const Product = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <ProductGrid>
      {productTest().map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
);
