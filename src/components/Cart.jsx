import { HStack, Box } from "@chakra-ui/react";
import { useCart } from "../context";
import { currency_symbols } from "../util";

const Cart = () => {
  const { cart } = useCart();

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
      <Box bg={"white"} rounded={100} py={'.25rem'} px={'0.5rem'} fontSize={'1.25rem'}>
        {totalItems}
      </Box>
      <Box>{`${currency_symbols["USD"]}${totalPrice}`}</Box>
    </HStack>
  );
};
export default Cart;
