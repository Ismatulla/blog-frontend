import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";
import SingleComment from "./comments/SingleComment";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateCommentData, CreateCommentSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

type Post = {
  author: {
    email: string;
    username: string;
  };
  category: string;
  content: string;
  title: string;
  createdAt: string;
};
type SingleBlogProps = {
  post: Post;
};

const SingleBlog: React.FC<SingleBlogProps> = ({ post }) => {
  const [comment, setComment] = useState<boolean>(false);
  const onToggleComment = () => {
    setComment(!comment);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentData>({
    resolver: zodResolver(CreateCommentSchema),
  });

  const onCommentPost: SubmitHandler<CreateCommentData> = async (data) => {
    console.log(data);
  };
  return (
    <Container
      maxW="1080px"
      mt={10}
      background="brand.600"
      p={20}
      borderRadius={20}>
      <Box>
        {" "}
        <img
          src="../../../public/assets/img-post.jpg"
          alt="not found"
          style={{ borderRadius: "20px", width: "100%" }}
        />
      </Box>
      <Heading fontWeight="700" size="2xl" textAlign="center" mt={20}>
        {post?.title}
      </Heading>
      <Box display="flex" alignItems="center" gap={4} mt={20}>
        <img
          src="../../../public/assets/user-small.jpg"
          alt="not found"
          width="48px"
          style={{ borderRadius: "50%" }}
        />{" "}
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
          }}>
          {post?.author?.username}
        </span>
        <span
          style={{
            fontSize: "1.6rem",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.6)",
          }}>
          {new Date(post?.createdAt).toLocaleDateString("en-US")}
        </span>
        <Badge
          borderRadius="4px"
          fontSize="1.4rem"
          fontFamily="Roboto"
          fontWeight="bold"
          size="lg"
          padding={4}>
          {post?.category}
        </Badge>
      </Box>
      <Box marginTop="1.25rem">
        <Text fontSize="2rem">{post?.content}</Text>
      </Box>
      <Box display="flex" gap={6} my={12}>
        {" "}
        <Box width="36px" cursor="pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-1">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>{" "}
        </Box>
        <Box width="36px" cursor="pointer">
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
              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
            />
          </svg>
        </Box>
        <Box width="36px" cursor="pointer" onClick={onToggleComment}>
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
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
        </Box>
        <form onSubmit={handleSubmit(onCommentPost)} style={{ width: "100%" }}>
          <FormControl
            isInvalid={!!errors.content}
            display={comment ? "flex" : "none"}
            flexDirection="column"
            alignItems="end">
            <Textarea
              fontSize="1.5rem"
              placeholder="Write a comment ..."
              border="2px solid teal"
              {...register("content")}
            />
            <FormErrorMessage fontSize="1.5rem">
              {errors.content?.message}
            </FormErrorMessage>
            <Button
              disabled={isSubmitting}
              fontSize="1.5rem"
              padding="2rem"
              colorScheme="teal"
              width="full"
              type="submit"
              maxW={40}
              borderRadius={41}
              mt={4}>
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
      <SingleComment />
    </Container>
  );
};

export default SingleBlog;
