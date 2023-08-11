import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const expensiveCheck = (filters, product) => {
  if (filters.includes("expensive")) return product.price > 100;
  return true;
};

const deliveryCheck = (filters, product) => {
  if (filters.includes("deliverable")) return product.delivery;
  return true;
};

const stockCheck = (filters, product) => {
  if (filters.includes("inStock")) return product.inStock;
  return true;
};

const Products = ({ category, products, filters }) => {
  const filteredProducts = products.filter(
    (product) =>
      expensiveCheck(filters, product) &&
      stockCheck(filters, product) &&
      deliveryCheck(filters, product)
  );

  return (
    <Box borderLeft={"1px solid"} borderLeftColor={"gray.200"} ml={10} pl={10}>
      <Heading my={5}>{category.name}</Heading>
      <Text>{category.description}</Text>
      <Flex gap={10} mt={10} flexWrap={"wrap"}>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Flex>
    </Box>
  );
};
export default Products;
