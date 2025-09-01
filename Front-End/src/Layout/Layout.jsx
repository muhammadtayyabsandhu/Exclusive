import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import FlowerChatBot from "../Components/FlowerChatBot"; // 👈 ChatBot import

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* 👇 ChatBot har page pe right-bottom corner par show hoga */}
      <FlowerChatBot />
    </>
  );
};

export default Layout;
