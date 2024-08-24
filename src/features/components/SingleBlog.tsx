import { Badge, Box, Container, Heading, Text } from "@chakra-ui/react";
import imgPost from "../../../public/assets/img-post.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleBlog = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <Heading fontWeight="700" size="2xl" textAlign="center">
        The Art of the Start
      </Heading>
      <Box display="flex =" alignItems="center" gap={2}>
        <img src='../../../public/assets/user-small.jpg' alt="" />{" "}
        <span style={{ fontSize: "0.87rem" }}>Author</span>
        <span style={{ fontSize: "0.87rem" }}>time posted</span>
        <Badge borderRadius="4px">Category</Badge>
      </Box>
      <Box marginTop="1.25rem">
        <Text fontSize="xl">
          In the ever-evolving world of web design, the concept of minimalism
          has gained significant traction. Minimalism in web design is not just
          about stripping away unnecessary elements, but rather about creating a
          harmonious balance between form and function. By embracing the
          principles of minimalism, designers can craft digital experiences that
          are both visually appealing and highly intuitive.
        </Text>
      </Box>
      <img src='../../../public/assets/img-post.jpg' alt="not found" />
      <Box display="flex" gap={6}>
        <Badge>
          {" "}
          <FontAwesomeIcon icon="fa-regular fa-thumbs-up" />
        </Badge>
        <Badge>
          {" "}
          <FontAwesomeIcon icon="fa-regular fa-thumbs-down" />
        </Badge>
        <Badge>
          <FontAwesomeIcon icon="fa-regular fa-comment" />
        </Badge>
        <h1>comments goes here </h1>
      </Box>
    </Container>
  );
};

export default SingleBlog;
