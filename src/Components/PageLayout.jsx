import React from "react";
import Header from "./Header";
import CategoryList from "./CategoryList";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CategoryList />
      <main className="flex-grow">
        <Outlet />
      </main>
     <Footer/>
    </div>
  );
}
