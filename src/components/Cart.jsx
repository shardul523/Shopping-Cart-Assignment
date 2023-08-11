import { HStack, Box, Button } from "@chakra-ui/react";
import { useCart } from "../context";
import { currency_symbols } from "../util";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (accCount, item) => accCount + (item.count ? item.count : 0),
    0
  );

  const totalPrice = cart.reduce(
    (accSum, item) => accSum + (item.count ? item.price * item.count : 0),
    0
  );

  return (
    <HStack>
      <Button bg={"white"} rounded={100} onClick={() => navigate("/checkout")}>
        {totalItems}
      </Button>
      <Box>{`${currency_symbols["USD"]}${totalPrice}`}</Box>
    </HStack>
  );
};
export default Cart;
