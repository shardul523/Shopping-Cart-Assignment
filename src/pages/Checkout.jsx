import {
  Box,
  Card,
  CardBody,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import CheckoutItems from "../components/CheckoutItems";

const Checkout = () => {
  return (
    <Box>
      <Heading>Checkout</Heading>
      <Card>
        <CardBody>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                </Tr>
              </Thead>
              <Tbody>
                <CheckoutItems />
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </Box>
  );
};
export default Checkout;
