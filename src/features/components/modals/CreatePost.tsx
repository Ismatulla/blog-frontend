import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Text,
  Textarea,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
import { CreatePostSchema, CreatePostData } from "../../schemas/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "../../utils/auth";

function CreatePost({ isOpen, onClose }: Props) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreatePostData>({
    resolver: zodResolver(CreatePostSchema),
  });

  const onSubmit: SubmitHandler<CreatePostData> = async (data) => {
    try {
      const response = await createPost(data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent minW={446} minH={544}>
          <ModalHeader fontSize="2rem">New Post</ModalHeader>
          <Text fontSize="1.2rem" color="#8f8a8a" px={6}>
            Create a new blog post
          </Text>
          <ModalCloseButton />
          <ModalBody pb={6} minW={446}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel fontSize="1.8rem">Title</FormLabel>
              <Input
                {...register("title")}
                placeholder="First name"
                fontSize="1.6rem"
                py={18}
              />
              <FormErrorMessage fontSize="1.2rem">
                {errors.title?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.content}>
              <FormLabel fontSize="1.8rem">Content</FormLabel>
              <Textarea
                {...register("content")}
                placeholder="Write your post content "
                fontSize="1.6rem"
              />
              <FormErrorMessage fontSize="1.2rem">
                {errors.content?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={!!errors.category}>
              <FormLabel fontSize="1.8rem">Category</FormLabel>
              <Select
                {...register("category")}
                placeholder="Select option"
                fontSize="1.6rem"
                size="lg"
                variant="filled">
                <option value="Scientific">Scientific</option>
                <option value="Nature">Nature</option>
                <option value="Interest">Interest</option>
              </Select>
              <FormErrorMessage fontSize="1.2rem">
                {errors.category?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={4} isInvalid={!!errors.title}>
              <FormLabel fontSize="1.8rem">Featured Image</FormLabel>
              <input type="file" ref={initialRef} placeholder="Choose file" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              colorScheme="blue"
              mr={3}
              fontSize="1.6rem"
              p={8}>
              Post
            </Button>
            <Button fontSize="1.6rem" onClick={onClose} p={8}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default CreatePost;
