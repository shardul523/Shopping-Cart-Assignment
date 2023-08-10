import { useShop } from "../context";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  const { categories } = useShop();

  if (!categories) return <Box>Home</Box>;

  return (
    <Flex justify={"center"} align={"center"} gap={10}>
      {categories.map((cat) => (
        <Link to={`/category/${cat.name.toLowerCase()}`} key={cat.id}>
          {cat.name}
        </Link>
      ))}
    </Flex>
  );
};
export default Home;
