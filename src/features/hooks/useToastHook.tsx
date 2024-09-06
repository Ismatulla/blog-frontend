import { useToast, UseToastOptions } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { useCallback, useRef } from "react";

type AxiosErrorResponse = {
  response?: {
    data?: {
      error?: string;
    };
  };
};
const useToastHook = () => {
  const toast = useToast();
  const toastIdRef = useRef<string | number | undefined>();

  const showToast = useCallback(
    (options: UseToastOptions) => {
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
      }
      toastIdRef.current = toast(options);
    },
    [toast]
  );

  const successToast = useCallback(
    (options: Omit<UseToastOptions, "status">) => {
      showToast({ ...options, status: "success", position: "top-right" });
    },
    [showToast]
  );

  const warningToast = useCallback(
    (error: AxiosError | AxiosErrorResponse) => {
      let errorMessage: string;

      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.error || error.message || "An error occurred";
      } else {
        errorMessage = error.response?.data?.error || "An error occurred";
      }

      showToast({
        description: errorMessage,
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top-right",
        
      });
    },
    [showToast]
  );

  return [successToast, warningToast];
};

export default useToastHook;
