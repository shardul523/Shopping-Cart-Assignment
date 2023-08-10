import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const Products = ({ category, products }) => {
  return (
    <Box>
      <Heading my={5}>{category.name}</Heading>
      <Text>{category.description}</Text>
      <Flex gap={10} mt={10} flexWrap={"wrap"}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Flex>
    </Box>
  );
};
export default Products;
