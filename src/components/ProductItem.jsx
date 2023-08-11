import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import { useCart } from "../context";
import { currency_symbols } from "../util";
import ItemQuantityUpdater from "./ItemQuantityUpdater";

const StockStatus = ({ inStock }) =>
  inStock ? (
    <Text color={"green.500"}>In Stock</Text>
  ) : (
    <Text color={"red.500"}>Out of Stock!</Text>
  );

const ProductItem = ({ product }) => {
  const { cart, dispatch } = useCart();

  const inCart = cart.some((item) => item.id === product.id);
  const inStock = product.inStock;

  const onAdd = () =>
    dispatch({
      itemId: product.id,
      type: "add",
      itemPrice: product.price,
    });

  return (
    <Card borderRadius={"2xl"} w={"225px"}>
      <CardBody>
        <Stack spacing={"5"}>
          <Image
            position={"relative"}
            left={"20px"}
            src={product.thumbnail}
            objectFit={"contain"}
            boxSize={"150px"}
            borderRadius={"lg"}
          />
          <Heading fontSize={"md"}>{product.name}</Heading>
          <Text fontWeight={"bold"}>{`${currency_symbols[product.currency]}${
            product.price
          }`}</Text>
          <StockStatus inStock={inStock} />
          {inCart ? (
            <ItemQuantityUpdater product={product} />
          ) : (
            <Button onClick={onAdd} isDisabled={!inStock}>
              Add to Cart
            </Button>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
export default ProductItem;
