import { useShop } from "../context";
import { Box, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { categories } = useShop();
  const navigate = useNavigate();

  if (!categories) return <Box>Home</Box>;

  return (
    <Flex justify={"center"} align={"center"} gap={10} mt={20}>
      {categories.map((cat) => (
        <Button
          onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
          key={cat.id}
          w={"150px"}
          h={"100px"}
          bg={"white"}
        >
          {cat.name}
        </Button>
      ))}
    </Flex>
  );
};
export default Home;
