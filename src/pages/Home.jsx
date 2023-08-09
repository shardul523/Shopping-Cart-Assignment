import { useShop } from "../context/ShopContext";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const { categories } = useShop();

  if (!categories) return <Box>Home</Box>;

  return categories.map((cat) => (
    <Link to={`/category/${cat.name.toLowerCase()}`} key={cat.id}>
      {cat.name}
    </Link>
  ));
};
export default Home;
