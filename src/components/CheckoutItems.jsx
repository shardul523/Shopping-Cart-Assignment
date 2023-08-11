import { Td, Tr } from "@chakra-ui/react";
import { useCart, useShop } from "../context";
import ItemQuantityUpdater from "./ItemQuantityUpdater";

const CheckoutItems = () => {
  const { products } = useShop();
  const { cart } = useCart();

  const checkoutProducts = cart.map((item) => {
    const currProduct = products.find((product) => product.id === item.id);
    return { ...item, ...currProduct };
  });

  return checkoutProducts.map((product) => (
    <Tr key={product.id}>
      <Td>{product.name}</Td>
      <Td>{product.price}</Td>
      <Td>
        <ItemQuantityUpdater product={product} />
      </Td>
    </Tr>
  ));
};
export default CheckoutItems;
