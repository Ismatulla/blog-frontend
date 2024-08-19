import React from "react";

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
}
export const RegisterField: React.FC<FormFieldProps> = ({
  name,
  label,
  register,
  error,
  type = "text",
}) => (
  <FormControl isInvalid={!!error}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Input
      id={name}
      type={type}
      {...register(name)}
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);
