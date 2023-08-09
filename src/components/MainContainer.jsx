import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <Box minH={"100vh"} bg={"cyan.50"}>
      <Container display={"flex"} flexDir={"column"} py={"20"}>
        <Box display={"flex"} flexDir={"row-reverse"}>
          Cart
        </Box>
        <Outlet />
      </Container>
    </Box>
  );
};
export default MainContainer;
