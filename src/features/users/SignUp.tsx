import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useToastHook from "../hooks/useToastHook";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { RegisterData, RegisterSchema } from "../schemas/auth";
import { RegisterField } from "../ui/RegisterField";
const SignUp: React.FC = () => {
  const [successToast, warningToast] = useToastHook();
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  interface AxiosErrorResponse {
    response?: {
      data?: {
        error?: string;
      };
    };
  }
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });
  const fields: Array<keyof RegisterData> = [
    "firstname",
    "lastname",
    "email",
    "password",
    "confirmPassword",
  ];
  return (
    <Container
      marginTop={100}
      border="1px solid #f2f2f2"
      borderRadius="6px"
      padding={4}
      maxWidth={400}
      borderColor={borderColor}>
      <Heading as="h1" size="xl" margin="2rem auto">
        Sign Up
      </Heading>
      <form>
        <VStack spacing={4}>
          {fields.map((field) => (
            <RegisterField
              key={field}
              name={field}
              label={
                field.charAt(0).toUpperCase() +
                field
                  .slice(1)
                  .replace(/([A-Z])/g, " $1")
                  .trim()
              }
              register={register}
              error={errors[field]?.message}
              type={
                field.includes("password")
                  ? "password"
                  : field === "email"
                  ? "email"
                  : "text"
              }
            />
          ))}
          <Button
            colorScheme="teal"
            width="full"
            type="submit"
            isLoading={isSubmitting}>
            Register
          </Button>{" "}
          borderColor={borderColor}
          bgColor={bgColor}
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
