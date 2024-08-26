import { Container } from "@chakra-ui/react";
import  { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth={"container.xl"} margin={"0 auto"}>
      {children}
    </Container>
  );
};

export default Layout;
