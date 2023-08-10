import { useParams } from "react-router-dom";
import { useShop } from "../context";
import { Grid, GridItem } from "@chakra-ui/react";
import Products from "../components/Products";

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
    <Grid templateColumns={"auto 1fr"}>
      <GridItem>Filter</GridItem>
      <GridItem>
        <Products category={currCategory} products={currProducts} />
      </GridItem>
    </Grid>
  );
};
export default Category;
