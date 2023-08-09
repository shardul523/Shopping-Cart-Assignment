import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { Grid, GridItem, Heading } from "@chakra-ui/react";

const Category = () => {
  const { categories, products } = useShop();
  const { categoryName } = useParams();

  const currCategory = categories.filter(
    (cat) => cat.name.toLowerCase() === categoryName
  )[0];
  const currProducts = products.filter(
    (product) => product.categoryId === currCategory.id
  );

  return (
    <Grid
      templateAreas={`
    'catName catName'
    'filter products'
    `}
      templateColumns={"auto 1fr"}
    >
      <GridItem area={"catName"}>
        <Heading>{currCategory.name}</Heading>
      </GridItem>
      <GridItem area={"filter"}>Filter</GridItem>
      <GridItem area={"products"}>product</GridItem>
    </Grid>
  );
};
export default Category;
