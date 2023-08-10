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

const ProductItem = ({ product }) => {
  const { cart, dispatch } = useCart();
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
          <Button
            onClick={() =>
              dispatch({
                itemId: product.id,
                type: "add",
                itemPrice: product.price,
              })
            }
          >
            Add to Cart
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
export default ProductItem;
