import React from "react";
import Home from "@/pages/home/Home";
import Products from "@/pages/products/Products";
import Users from "@/pages/users/Users";
import Navbar from "@/components/Navbar/Navbar";
import Menu from "@/components/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="main-container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/users", element: <Users /> },
        { path: "/products", element: <Products /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
