import React, { useEffect } from "react";
import BlogFooter from "../blog/BlogFooter";
import Empathy from "../blog/empathy/Empathy";
import Plenty from "../blog/plenty/Plenty";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

const Blog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Plenty />
      <Empathy />
      <Footer />
    </>
  );
};

export default Blog;
