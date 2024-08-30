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
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function CreatePost({ isOpen, onClose }: Props) {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW={446} minH={544}>
        <ModalHeader fontSize="2rem">New Post</ModalHeader>
        <Text fontSize="1.2rem" color="#8f8a8a" px={6}>
          Create a new blog post
        </Text>
        <ModalCloseButton />
        <ModalBody pb={6} minW={446}>
          <FormControl>
            <FormLabel fontSize="1.8rem">Title</FormLabel>
            <Input
              ref={initialRef}
              placeholder="First name"
              fontSize="1.6rem"
              py={18}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel fontSize="1.8rem">Content</FormLabel>
            <Textarea
              placeholder="Write your post content "
              fontSize="1.6rem"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontSize="1.8rem">Category</FormLabel>
            <Select
              placeholder="Select option"
              fontSize="1.6rem"
              size="lg"
              variant="filled">
              <option value="Scientific">Scientific</option>
              <option value="Nature">Nature</option>
              <option value="Interest">Interest</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel fontSize="1.8rem">Featured Image</FormLabel>
            <input
              type="file"
              ref={initialRef}
              placeholder="Choose file"
            
             
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} fontSize="1.6rem" p={8}>
            Save
          </Button>
          <Button fontSize="1.6rem" onClick={onClose} p={8}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreatePost;
