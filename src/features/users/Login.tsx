import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useToastHook from "../hooks/useToastHook";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { LoginData, LoginSchema } from "../schemas/auth";
import { RegisterField } from "../ui/RegisterField";
import { loginUser } from "../utils/auth";

const Login: React.FC = () => {
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
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const fields: Array<keyof LoginData> = ["email", "password"];

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem("token", response?.token);
      console.log(response);
      navigate("/");
      successToast({ description: "User logged in successfully" });
    } catch (error) {
      console.log(error);
      warningToast(error as AxiosErrorResponse);
    }
  };
  return (
    <Container
      marginTop={100}
      border="1px solid #f2f2f2"
      borderRadius="6px"
      padding={4}
      maxWidth={400}
      borderColor={borderColor}>
      <Heading as="h1" size="xl" margin="2rem auto" textAlign={"center"}>
        Login
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {fields.map((field) => (
            <RegisterField
              key={field}
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1).trim()}
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
            fontSize="1.5rem"
            padding="2rem"
            colorScheme="teal"
            width="full"
            type="submit"
            isLoading={isSubmitting}>
            Login
          </Button>{" "}
          borderColor={borderColor}
          bgColor={bgColor}
        </VStack>
      </form>
      <Text sx={{ marginTop: 4 }} fontSize="2rem">
        You don't have an account?{" "}
        <Link
          to="/signup"
          style={{ color: useColorModeValue("#1a73e8", "#63B3ED") }}>
          Sign Up
        </Link>
      </Text>
    </Container>
  );
};

export default Login;
