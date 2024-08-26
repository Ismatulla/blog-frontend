import { Box, Text } from "@chakra-ui/react";

const Error = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100dvh"
      fontWeight="700">
      <Text fontSize="32px">Not found</Text>
    </Box>
  );
};

export default Error;
