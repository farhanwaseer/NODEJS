import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";

const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "E-commerce",
  description: "mern stack project",
  keywords: "mern, react, ecommerce, mongodb",
  author: "Farhan Waseer",
};
export default Layout;
