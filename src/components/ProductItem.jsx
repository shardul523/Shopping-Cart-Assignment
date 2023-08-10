import {
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useCart } from "../context";
import { currency_symbols } from "../util";

const ProductItem = ({ product }) => {
  const { cart, dispatch } = useCart();

  let currCount = cart.find((item) => item.id === product.id)?.count;

  if (!currCount) currCount = 0;

  const onAdd = () =>
    dispatch({
      itemId: product.id,
      type: "add",
      itemPrice: product.price,
    });

  const onIncrement = () =>
    dispatch({ itemId: product.id, type: "update", itemCount: currCount + 1 });
  const onDecrement = () =>
    dispatch({ itemId: product.id, type: "update", itemCount: currCount - 1 });

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
          {currCount === 0 && <Button onClick={onAdd}>Add to Cart</Button>}
          {currCount > 0 && (
            <Flex justify={"space-around"} align={"center"}>
              <IconButton
                icon={<AiOutlinePlus />}
                onClick={onIncrement}
                rounded={100}
              />
              {currCount}
              <IconButton
                icon={<AiOutlineMinus />}
                onClick={onDecrement}
                rounded={100}
              />
            </Flex>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
export default ProductItem;
