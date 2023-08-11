import { Heading, Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";

const Filter = ({ filters, setFilters }) => {
  return (
    <Stack gap={5}>
      <Heading my={5}>Filter</Heading>
      <CheckboxGroup
        defaultValue={filters}
        colorScheme="cyan"
        size={"lg"}
        onChange={(e) => setFilters(e)}
      >
        <Checkbox spacing={5} value={"deliverable"}>
          Deliverable
        </Checkbox>
        <Checkbox spacing={5} value={"expensive"}>
          Expensive
        </Checkbox>
        <Checkbox spacing={5} value={"inStock"}>
          In Stock
        </Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};
export default Filter;
