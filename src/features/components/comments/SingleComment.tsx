import { Box, Text, Container } from "@chakra-ui/react";

const SingleComment = () => {
  return (
    <Container maxW="container.xl" marginLeft="2rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {" "}
        <Text fontSize="3rem" fontFamily="Roboto" fontWeight="bold">
          Author
        </Text>
        <Box display="flex" gap={6} alignItems="center" justifyContent="center">
          <Box width="36px" cursor="pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Box>
          <Box width="36px" cursor="pointer">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Text fontSize="2.2rem" fontFamily="Roboto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe
        nam blanditiis, magni natus in maxime dolor veniam est nostrum
        laboriosam corrupti libero vel inventore possimus ad tempora aliquam quo
        corporis neque repellat cum! Perferendis minus fugiat dolores illo.
        Recusandae accusamus, dolor amet porro sequi provident iusto adipisci
        vitae at in omnis similique fugiat quod laudantium aperiam dolores totam
        fugit quisquam! Debitis possimus animi facere molestiae facilis natus
        iusto tempore consectetur asperiores ducimus amet vitae repellat aperiam
        corrupti optio ea eum, accusantium, sequi quia, maxime earum et culpa.
        Sequi inventore nostrum hic enim atque, laboriosam iste tenetur ducimus
        nihil illum, debitis dicta architecto iusto eum mollitia ad esse.
        Voluptate ratione iste, veritatis earum sed, facilis fugit consectetur
        dolor error sequi nesciunt, in expedita esse. Culpa inventore
      </Text>
    </Container>
  );
};

export default SingleComment;
