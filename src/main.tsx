import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Login from "./features/users/Login.tsx";

import SignUp from "./features/users/SignUp.tsx";
import Navbar from "./features/components/Navbar.tsx";
import Error from "./features/components/Error.tsx";
import Home from "./pages/Home.tsx";
import Layout from "./features/components/Layout.tsx";
import Blog from "./features/components/Blog.tsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#dce9f6",
  },
};

const AppLayoutr = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
const theme = extendTheme({ colors });

const router = createBrowserRouter([
  {
    element: <AppLayoutr />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
